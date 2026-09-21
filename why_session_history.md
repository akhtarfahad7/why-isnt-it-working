# Why Isn't It Working? - Session History
## Date: September 21, 2026
## Last Updated: Phase 8 - Deployment + AI Button Fix

---

## Session Overview
Built a complete diagnostic web application "Why Isn't It Working?" from scratch to Phase 4 + Gemini AI Integration.

---

## Phase 1: Project Setup & MVP (Initial Build)

### What was built:
- Next.js 16.3.5 + TypeScript + Tailwind CSS 4
- 3 MVP problems with full diagnostic trees
- Deterministic diagnostic engine
- Safety system (SAFE/CAUTION/HIGH/STOP)
- All pages (Home, Problems, Categories, Search, About, Safety, Contact, Privacy, Terms, Disclaimer)
- Mobile-first responsive design
- SEO metadata

### Files created:
```
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/app/problems/page.tsx
src/app/problems/[slug]/page.tsx
src/app/categories/page.tsx
src/app/categories/[slug]/page.tsx
src/app/search/page.tsx
src/app/about/page.tsx
src/app/safety/page.tsx
src/app/contact/page.tsx
src/app/privacy/page.tsx
src/app/terms/page.tsx
src/app/disclaimer/page.tsx
src/components/ProblemCard.tsx
src/components/DiagnosticQuestion.tsx
src/components/AnswerButton.tsx
src/components/SafetyWarning.tsx
src/components/DiagnosisProgress.tsx
src/components/DiagnosisResult.tsx
src/components/CauseCard.tsx
src/components/SearchBox.tsx
src/components/RelatedProblems.tsx
src/lib/db/index.ts
src/lib/db/types.ts
src/lib/diagnostic/engine.ts
src/lib/safety/index.ts
src/data/categories.ts
src/data/problems/mvp.ts
tests/engine.test.ts
tests/data.test.ts
tests/safety.test.ts
```

---

## Phase 2: Additional Problems

### Added:
- 7 more problems (Phone Battery, Phone Overheating, AC, Washing Machine, Microwave, Car AC, Car Brakes)
- Updated data loader
- Updated tests

### Files created:
```
src/data/problems/electronics.ts
src/data/problems/appliances.ts
src/data/problems/vehicles.ts
```

---

## Phase 3: AI, SEO & Database

### Added:
- Supabase database schema + migrations
- AI abstraction layer (provider + diagnostic functions)
- Sitemap, robots.txt, structured data
- Tests for diagnostic engine

### Files created:
```
supabase/migrations/001_initial_schema.sql
.env.local.example
src/lib/ai/provider.ts
src/lib/ai/diagnostic.ts
src/app/sitemap.ts
src/app/robots.ts
src/components/StructuredData.tsx
```

---

## Phase 4: Full Diagnostic Database

### What was built:
1. **Smart Search System** - Fuzzy matching, synonyms, keyword aliases
2. **AI Dynamic Diagnostic Engine** - Generate trees for any problem
3. **Expanded Manual Database** - 31 problems across 7 categories
4. **API Routes** - /api/diagnostic and /api/search
5. **Updated UI** - Search page with AI fallback

### Files created:
```
src/lib/search/smart-search.ts
src/lib/search/synonyms.ts
src/lib/search/aliases.ts
src/lib/search/fuzzy.ts
src/lib/search/ranker.ts
src/lib/search/index.ts
src/lib/ai/dynamic-diagnostic.ts
src/lib/ai/tree-cache.ts
src/lib/ai/prompts.ts
src/lib/ai/validator.ts
src/app/api/diagnostic/route.ts
src/app/api/search/route.ts
src/data/problems/home.ts
src/data/problems/software.ts
src/data/problems/internet.ts
src/data/problems/electronics-extended.ts
```

---

## Phase 5: Google Gemini AI Integration

### What was built:
1. **Gemini Provider** - Free AI via Google Gemini API
2. **OpenAI Fallback** - Backup provider
3. **Optimized Prompts** - Gemini-specific prompt engineering
4. **Better Error Handling** - Graceful fallbacks
5. **Improved JSON Parsing** - Handles code fences, trailing commas

### Files modified:
```
src/lib/ai/provider.ts        ← Gemini + OpenAI + NoOp providers
src/lib/ai/prompts.ts         ← Gemini-optimized prompts
src/lib/ai/dynamic-diagnostic.ts ← Better parsing & error handling
.env.local.example            ← Updated with Gemini setup
```

### How Gemini Integration Works:
```
User Query
    ↓
Smart Search (Manual Database)
    ↓ No Match?
AI Provider (Google Gemini API)
    ↓
Generate Diagnostic Tree
    ↓
Validate (Safety Rules)
    ↓
Cache (Supabase, 24hr TTL)
    ↓
Show to User
```

### Gemini API Setup:
1. Get free API key: https://aistudio.google.com/apikey
2. Add to .env.local:
   ```
   AI_PROVIDER=gemini
   GOOGLE_AI_API_KEY=your_key_here
   ```
3. Free tier: 15 requests/minute, 1M tokens/day

---

## Phase 6: Foundation Fix & Polish

### What was built:
1. **Environment Configuration** - `.env.local` created with Gemini API setup
2. **Supabase Schema Fix** - Added `diagnostic_cache` table for AI-generated trees
3. **AI Diagnostic Flow Fix** - Fixed broken AI flow where generated trees couldn't be displayed
4. **AIDiagnosticLoader Component** - New client component handling `?ai=true` route
5. **Error Boundaries** - Global error handling with `error.tsx` and `not-found.tsx`
6. **Loading States** - Skeleton loaders for search results and AI generation
7. **Custom README** - Project documentation replacing default boilerplate
8. **Vercel Config** - `vercel.json` for deployment

### Files created:
```
.env.local
src/components/AIDiagnosticLoader.tsx
src/app/error.tsx
src/app/not-found.tsx
src/app/loading.tsx
vercel.json
```

### Files modified:
```
supabase/migrations/001_initial_schema.sql  ← Added diagnostic_cache table
src/app/problems/[slug]/page.tsx           ← AI mode handling
src/app/search/page.tsx                     ← Query passing, loading skeletons
README.md                                   ← Custom documentation
```

### Critical Bug Fixed:
- **AI Diagnostic Flow was broken** - Search → AI generate → redirect to `/problems/[slug]?ai=true` → 404 error because server component couldn't find AI-generated problem in memory database
- **Fix:** Added `AIDiagnosticLoader` client component that fetches AI data via API when `?ai=true` is present

---

## Final Statistics

| Metric | Count |
|--------|-------|
| Categories | 7 |
| Problems | 31 |
| Diagnostic Nodes | 150+ |
| Causes | 155+ |
| Tests | 31 passing |
| Build | Successful |
| Lint | Clean |
| AI Providers | 2 (Gemini + OpenAI) |
| Error Boundaries | Global (error, not-found, loading) |

---

## Categories & Problems

### Electronics (8 problems)
1. Laptop Won't Charge
2. Phone Battery Drains Fast
3. Phone Overheating
4. Phone Screen Not Working
5. Tablet Not Turning On
6. Monitor No Display
7. Printer Not Printing
8. Bluetooth Not Connecting

### Networking (1 problem)
1. Wi-Fi Keeps Disconnecting

### Vehicles (10 problems)
1. Car Won't Start
2. Car AC Not Working
3. Car Brakes Squealing
4. Car Battery Dead
5. Car Overheating
6. Car Strange Noises
7. Car Pulls to One Side
8. Check Engine Light On
9. Car Won't Accelerate
10. Car Vibrates When Braking

### Appliances (10 problems)
1. AC Not Cooling
2. Washing Machine Not Draining
3. Microwave Not Heating
4. Refrigerator Not Cooling
5. Dishwasher Not Cleaning
6. Oven Not Heating
7. Water Heater Not Working
8. Fan Not Working
9. Vacuum No Suction
10. Dryer Not Drying

### Home (5 problems)
1. Leaking Faucet
2. Clogged Drain
3. Door Won't Lock
4. Circuit Breaker Tripping
5. Toilet Running/Leaking

### Software (6 problems)
1. Computer Running Slow
2. Blue Screen of Death
3. App Crashing
4. Computer Not Turning On
5. Sound Not Working
6. Webcam Not Working

### Internet (5 problems)
1. Internet Not Working
2. Browser Not Loading Pages
3. Email Not Sending/Receiving
4. Video Streaming Buffering
5. VPN Not Connecting

---

## Technology Stack
- Next.js 16.3.5
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Vitest (testing)
- Supabase (planned)
- Google Gemini AI (free tier)
- OpenAI GPT-4o-mini (fallback)

---

## How to Run
```bash
cd D:\projects\why_isnt_it_working

# Create .env.local with Gemini API key
# Get key at: https://aistudio.google.com/apikey

npm run dev
```

---

## Key Architecture Decisions
1. **Deterministic diagnostic engine** - No randomness, structured decision trees
2. **AI as supporting layer** - Never overrides safety rules
3. **Hybrid approach** - Manual database + AI dynamic generation
4. **Safety first** - 4 levels (SAFE/CAUTION/HIGH/STOP)
5. **Mobile-first** - Responsive design for phone users
6. **SEO optimized** - Sitemap, structured data, meta tags
7. **Free AI first** - Google Gemini (free) + OpenAI (paid fallback)
8. **Caching** - Supabase cache for AI-generated trees (24hr TTL)

---

## Future Enhancements (Not Yet Implemented)
1. ~~Supabase database connection~~ → Schema ready, `.env.local` configured, needs live database
2. User accounts and session persistence
3. Admin panel for managing problems
4. Analytics dashboard
5. Community-contributed problems
6. Multi-language support (Hindi, Urdu)
7. Mobile app (React Native)

---

## Session ended successfully.

---

## Phase 7: Diagnostic Engine Fix (Core Experience)

### What was built:
1. **Fixed Scoring Bug** - Engine now tracks `{nodeId, answerId}` pairs instead of just node IDs. Only selected answers' causeScores are counted, not all answers on visited nodes.
2. **Added Back/Undo Button** - "Go Back" button in DiagnosticTool allows users to return to previous question. Full answer history maintained.
3. **Fixed Progress Bar** - Tree depth pre-computed via `computeTreeDepth()`. Progress bar shows accurate "Question X of ~Y" with percentage.
4. **Added Answer Trail** - Results page shows "Your Answers: Q1: ... → Q2: ..." so users understand how conclusion was reached.
5. **Search Suggestions** - Empty search state shows 6 popular problems as clickable pills. SearchBox pre-fills from URL params.
6. **Fixed Phantom Aliases** - Removed 23 aliases referencing non-existent problem slugs (car-battery-dead, refrigerator-not-cooling, etc.)

### Files modified:
```
src/lib/db/types.ts              ← Added AnsweredNode interface
src/lib/diagnostic/engine.ts     ← Fixed scoring, added goBack(), computeTreeDepth()
src/components/DiagnosticTool.tsx ← Back button, progress bar, answer trail
src/components/DiagnosisResult.tsx ← Answer trail display
src/components/SearchBox.tsx     ← Suggestions, pre-fill from URL
src/app/page.tsx                 ← Popular searches on homepage
src/app/search/page.tsx          ← Popular searches, pre-fill
src/lib/search/aliases.ts        ← Removed 23 phantom aliases
tests/engine.test.ts             ← Updated for new AnsweredNode type
```

### Critical Bug Fixed:
- **Scoring was inflated** - Old code counted ALL answers' causeScores on each visited node (including unselected answers). This made maxPossibleScore unreliable and classifications inaccurate.
- **Fix:** Now only counts the SELECTED answer's causeScores for each node.

### Test Results:
- 33/33 tests passing (increased from 31)
- Build successful
- Lint clean

---

## Final Statistics

| Metric | Count |
|--------|-------|
| Categories | 7 |
| Problems | 31 |
| Diagnostic Nodes | 150+ |
| Causes | 155+ |
| Tests | 33 passing |
| Build | Successful |
| Lint | Clean |
| AI Providers | 2 (Gemini + OpenAI) |
| Search Aliases | 93 (cleaned from 116) |

---

## Phase 7 Session Notes:
- Date: September 21, 2026
- Duration: ~20 minutes
- Focus: Core diagnostic experience fix
- Status: All 6 tasks completed successfully
- Key Achievement: Diagnostic engine now accurate, back button added, progress bar fixed

---

## Phase 8: Deployment & Deployment Fixes

### What was done:
1. **Git Repository Initialized** - First commit with all code
2. **GitHub Push** - Repository `akhtarfahad7/why-isnt-it-working`
3. **Vercel Deployment** - Deployed via Vercel CLI
4. **Fixed @types/node** - Updated ^20 → ^22 to fix npm install failure on Vercel
5. **Fixed AI Button Visibility** - Now always shows on search page (not just when 0 results)

### Files modified:
```
package.json                        ← @types/node ^20 → ^22
src/app/search/page.tsx             ← AI button always visible
```

### Deployment Info:
- **Platform:** Vercel
- **Repo:** https://github.com/akhtarfahad7/why-isnt-it-working
- **Plan:** Hobby (free)
- **AI Provider:** Google Gemini (free tier)
- **Auto-deploy:** On push to main

### Session Notes:
- Date: September 21, 2026
- Duration: ~30 minutes
- Focus: Deployment + fix AI button visibility
- Status: Successfully deployed and live
