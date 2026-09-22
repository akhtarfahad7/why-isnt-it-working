export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIResponse {
  content: string;
  success: boolean;
  error?: string;
}

export interface AIProvider {
  chat(messages: AIMessage[]): Promise<AIResponse>;
}

export type AIProviderType = "gemini" | "openai" | "none";

export function createAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER ?? "gemini";

  switch (provider) {
    case "gemini":
      return new GeminiProvider();
    case "openai":
      return new OpenAIProvider();
    default:
      return new NoOpProvider();
  }
}

class GeminiProvider implements AIProvider {
  private apiKey: string;
  private model: string;

  constructor() {
    this.apiKey = process.env.GOOGLE_AI_API_KEY ?? "";
    this.model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
  }

  async chat(messages: AIMessage[]): Promise<AIResponse> {
    try {
      if (!this.apiKey) {
        return {
          content: "",
          success: false,
          error: "Google AI API key not configured. Set GOOGLE_AI_API_KEY in .env.local",
        };
      }

      const systemInstruction = messages.find((m) => m.role === "system")?.content ?? "";
      const userMessages = messages.filter((m) => m.role !== "system");

      const contents = userMessages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 2048,
            topP: 0.8,
            topK: 40,
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("[GEMINI ERROR]", response.status, JSON.stringify(errorData));
        return {
          content: "",
          success: false,
          error: `Gemini API error: ${response.status} - ${errorData.error?.message ?? "Unknown error"}`,
        };
      }

      const data = await response.json();
      console.log("[GEMINI RESPONSE]", JSON.stringify(data).substring(0, 500));
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        console.error("[GEMINI NO TEXT]", JSON.stringify(data).substring(0, 500));
        return {
          content: "",
          success: false,
          error: "No content returned from Gemini",
        };
      }

      return { content: text, success: true };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

class OpenAIProvider implements AIProvider {
  async chat(messages: AIMessage[]): Promise<AIResponse> {
    try {
      const apiKey = process.env.AI_API_KEY;
      if (!apiKey) {
        return {
          content: "",
          success: false,
          error: "OpenAI API key not configured",
        };
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages,
          max_tokens: 2048,
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        return {
          content: "",
          success: false,
          error: `AI request failed: ${response.status}`,
        };
      }

      const data = await response.json();
      return {
        content: data.choices[0]?.message?.content ?? "",
        success: true,
      };
    } catch (error) {
      return {
        content: "",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

class NoOpProvider implements AIProvider {
  async chat(): Promise<AIResponse> {
    return {
      content: "",
      success: false,
      error: "AI provider not configured. Set AI_PROVIDER and API keys in .env.local",
    };
  }
}
