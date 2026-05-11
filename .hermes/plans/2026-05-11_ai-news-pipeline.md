# AI News Pipeline — Daily Digest + Weekly Recap

**Goal:** Two automated cron jobs that surface cutting-edge, under-the-radar AI tools/frameworks
to Nicolas on Telegram. Daily: ~5 raw finds. Weekly: curated analysis of the best.

**Created:** 2026-05-11
**Status:** planning

---

## Architecture

```
┌─────────────────────────────────────────────┐
│                 Data Sources                 │
│  GitHub Trending · HN /new · Product Hunt    │
│  X/Twitter (key accounts) · r/LocalLLaMA    │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│              Filtering Engine                │
│  Stars < 1000 · Not on TechCrunch/Verge     │
│  Has working code/docs · Updated < 14 days   │
│  Solves real problem · Not a wrapper/parody  │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
┌───────────────┐    ┌──────────────────┐
│  Daily Digest │    │   Weekly Recap   │
│  08:00 CET    │    │  Sun 18:00 CET   │
│  ~5 items     │    │  ~10 items       │
│  One-liners   │    │  Analysis +      │
│  + links      │    │  trend spotting  │
└───────────────┘    └──────────────────┘
```

---

## Data Sources & Scraping Strategy

### Daily Digest sources (run every morning):

| Source | Method | What to extract |
|--------|--------|-----------------|
| GitHub Trending | `web_extract` + regex | AI repos < 1000 stars, posted in last 7 days |
| Hacker News /new | `web_search` site:news.ycombinator.com "Show HN" AI | Posts with "AI", "LLM", "agent" in title |
| Product Hunt AI | `web_extract` producthunt.com/categories/ai-agents | New launches, < 100 upvotes (pre-blowup) |
| r/LocalLLaMA | `web_extract` reddit.com/r/LocalLLaMA/new | New tools, model releases, "just released" |
| r/AI_Agents | `web_extract` reddit.com/r/AI_Agents/new | Agent frameworks, "I built", "Show" |
| X/Twitter | `web_search` from:@bentossell OR from:@rowancheung | Last 24h, filter for links to GitHub/new tools |

### Weekly Recap additional sources:

| Source | Method | What to extract |
|--------|--------|-----------------|
| Ben's Bites | `web_extract` bensbites.beehiiv.com | Weekly roundup, cross-reference with daily finds |
| awesome-ai-agents-2026 | `web_extract` GitHub README | New additions since last week |
| MarkTechPost | `web_search` site:marktechpost.com | Research → tool pipeline catches |
| BAIR Blog | `web_extract` bair.berkeley.edu/blog | New research that'll become tools |

---

## Filtering Heuristics

The hard part for daily: avoid the obvious stuff everyone already knows.

**INCLUDE if ALL of:**
- Under 1,000 GitHub stars (if applicable)
- Not covered by TechCrunch / The Verge / VentureBeat in last 7 days (spot-check via web_search)
- Has a working demo, docs, or install instructions (not just a README)
- Updated within last 14 days
- Solves a specific problem (not "ChatGPT but for X")

**EXCLUDE automatically:**
- Wrappers around OpenAI/Anthropic API with no unique logic
- "Curated list of..." repos (meta-resources, not tools)
- Parody/joke projects
- Crypto/NFT AI projects
- Anything requiring > $100/month just to try
- Chinese-only tools (unless Nicolas asks)

**Quality signals (boost ranking):**
- MIT/Apache 2.0 license
- Active issues/PRs (real community)
- Multiple contributors (not solo hobby project)
- Docker image or one-command install
- Benchmarks or comparison table in README

---

## Daily Digest Format

Delivered at 08:00 CET to Telegram. Max 5 items. Concise — Nicolas prefers short.

```
🆕 AI Radar — Mon 12 May

🔹 **Calfkit** — agents as distributed microservices over event streams
   github.com/calf-ai/calfkit-sdk | ⭐ 487 | Python | Apache 2.0
   Why: async, zero-coupling, scales independently. Production-ready.

🔹 **AgentScope** — full-stack framework with built-in fine-tuning + RL
   github.com/agentscope-ai/agentscope | ⭐ 1,200 | Python | Apache 2.0
   Why: lighter as models get smarter. Voice agents, MCP, evaluation built in.

🔹 **GNAP** — git-native agent protocol, 4 JSON files, no server needed
   github.com/farol-team/gnap | ⭐ 89 | Spec | MIT
   Why: any agent that can git push can participate. Dead simple.

🔹 **Gemini CLI** — Google's open-source terminal agent, 1M context
   github.com/google-gemini/gemini-cli | ⭐ 15,400 | Go | Apache 2.0
   Why: released last week, already usable. ReAct loop + MCP native.

🔹 **Caliber** — fingerprints your project, generates AI agent configs
   github.com/caliber/caliber | ⭐ 234 | Rust | MIT
   Why: auto-generates CLAUDE.md + .cursorrules, scores quality. Solves a real pain.
```

Rules:
- Exactly 5 items. If fewer qualify, say so: "⚠️ Only 3 met the bar today."
- Each item: name, one-line why, GitHub link, stars, language, license
- No intros, no "here's your digest", no fluff
- Link directly to GitHub (not a blog post about it)
- If a tool appeared in a previous digest, note it: "(↑ was 487 stars on Mon)"

---

## Weekly Recap Format

Delivered Sunday 18:00 CET to Telegram. Editorial, analytical, ~10 items.

```
📊 AI Radar Weekly — Week 20 (12–18 May)

## 🔥 Breakouts
Tools from past daily digests that blew up this week:
- Calfkit: 487 → 2,100 stars. Picked up by Ben's Bites on Wed.
- AgentScope: 1,200 → 3,800. Show HN hit front page.

## 🏆 Best New Finds
- **Hive** (github.com/aden-hive/hive) — production harness with self-healing agent graphs. Apache 2.0, Go. This is the real deal: goal → system, checkpoint recovery, human-in-the-loop. If you're building agents that can't fail, this is what you need.
- **GNAP** — still under 100 stars. I'm calling this early: git-native coordination is the right abstraction for agent teams. Watch this.

## 📉 Overhyped / Skip
- Tool X — 5,000 stars in 3 days but it's a thin GPT wrapper. Noise.

## 🧠 Trend to Watch
Event-driven agent architectures (Calfkit, Hive, GNAP). The monolith agent era is ending — 2026 Q3 will be about distributed, loosely-coupled agent systems. Position accordingly.

## 📎 Also Noteworthy
- 3 more quick items, one line each

## 🗓 Next Week
- Watch for: Google I/O agent announcements, Mistral's rumored agent SDK
```

Rules:
- Lead with "Breakouts" — what blew up from the daily digests
- "Best New Finds" — 2-3 deep dives with editorial opinion
- "Overhyped / Skip" — call out the fakes
- "Trend to Watch" — one macro observation
- "Also Noteworthy" — quick hits
- "Next Week" — upcoming events/conferences to watch
- Save journal to `~/.hermes/journal/ai-radar-weekly-YYYY-WW.md`

---

## Implementation Plan

### Phase 1: Skills (create these)

1. **`ai-radar-daily`** — scrapes sources, filters, formats daily digest
   - Trigger: cron at 08:00 CET daily
   - Tools needed: web_search, web_extract, execute_code, send_message
   - Contains: source list, filtering heuristics, output format template

2. **`ai-radar-weekly`** — weekly analysis + trend spotting
   - Trigger: cron at 18:00 CET Sundays
   - Tools needed: web_search, web_extract, execute_code, session_search, send_message
   - Contains: weekly format, analysis heuristics, journal save path

### Phase 2: Cron Jobs

```
ai-radar-daily:
  schedule: "0 8 * * *"
  skill: ai-radar-daily
  deliver: telegram
  enabled_toolsets: [web, session_search]
  
ai-radar-weekly:
  schedule: "0 18 * * 0"  (Sunday)
  skill: ai-radar-weekly
  deliver: telegram
  enabled_toolsets: [web, session_search, file]
```

### Phase 3: Testing

- Run daily manually for 3 days before cron — verify filtering works
- Tune star threshold (start at 1000, adjust if too noisy/quiet)
- Verify Reddit scraping (can be flaky)
- If X/Twitter scraping fails, fall back to web_search

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Reddit blocks scraping | Fall back to web_search "site:reddit.com/r/LocalLLaMA new AI tool" |
| GitHub Trending too noisy | Raise star floor, add language filter (Python, Go, Rust, TypeScript only) |
| HN rate limiting | Use web_search instead of direct scraping |
| Product Hunt paywall | Skip if blocked, not critical for "under the radar" |
| Digest too long for Telegram | Hard cap at 5 items, one line each |
| X/Twitter API dead | Remove from daily; rely on Ben's Bites + Reddit |

---

## Open Questions

1. Should the weekly recap include a "build this weekend" recommendation? (e.g., "Spin up Hive and connect it to your ServiceNow instance")
2. Should we cross-reference against Nicolas's existing skills/interests (computer vision, agents, French AI scene)?
3. Voice delivery option? (TTS the weekly recap as an audio message)
