# Why Isn't It Working?

A search-driven diagnostic web application that helps users troubleshoot everyday tech, appliance, and vehicle problems using structured decision trees with AI assistance.

## Features

- **31+ Diagnostic Problems** across 7 categories (Electronics, Vehicles, Appliances, Home, Software, Internet, Networking)
- **Smart Search** with fuzzy matching, synonyms, and keyword aliases
- **AI-Powered Diagnostics** - Generate custom diagnostic trees for any problem using Google Gemini AI
- **Safety System** - 4-level safety warnings (SAFE/CAUTION/HIGH/STOP)
- **Mobile-First Design** - Responsive UI built with Tailwind CSS
- **SEO Optimized** - Dynamic sitemap, structured data, meta tags

## Tech Stack

- Next.js 16.3.5 + React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Google Gemini AI (free tier)
- OpenAI GPT-4o-mini (fallback)
- Vitest (testing)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the example environment file and add your API keys:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
# Required for AI features
AI_PROVIDER=gemini
GOOGLE_AI_API_KEY=your_gemini_api_key_here

# Get free key at: https://aistudio.google.com/apikey
# Free tier: 15 requests/minute, 1M tokens/day
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How It Works

1. User searches for a problem (e.g., "laptop not charging")
2. Smart search checks the manual database (31+ problems)
3. If no match found, AI generates a custom diagnostic tree
4. User answers diagnostic questions
5. System identifies likely causes with safety levels

## API Endpoints

- `GET /api/search?q=query` - Search problems
- `POST /api/diagnostic` - Generate AI diagnostic tree

## Testing

```bash
npm test          # Watch mode
npm run test:run  # Single run
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

## Project Structure

```
src/
├── app/              # Pages and API routes
├── components/       # React components
├── lib/
│   ├── ai/          # AI providers and diagnostics
│   ├── db/          # Database layer (in-memory)
│   ├── diagnostic/  # Diagnostic engine
│   ├── search/      # Smart search system
│   └── safety/      # Safety rules
└── data/            # Problem data (31+ problems)
```

## License

MIT
