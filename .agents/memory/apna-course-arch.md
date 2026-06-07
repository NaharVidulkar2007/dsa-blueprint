---
name: Apna College course architecture
description: Why Apna College lectures are stored in TypeScript and progress in localStorage
---

**Rule:** Apna College (`/apna`) uses hardcoded TypeScript lecture data (src/lib/apna-content.ts) and localStorage for all progress — no Supabase.

**Why:** Only `SUPABASE_PUBLISHABLE_KEY` (anon key) is available in the environment — no `SUPABASE_SERVICE_ROLE_KEY` for schema migrations. The existing `lecture_progress` table has a FK constraint to `lectures(id)`, so Apna lectures can't be added without altering the schema. The pragmatic solution is localStorage with upgrade path later.

**How to apply:** 
- Progress key: `apna-progress` (Set<string> of completed lectureIds, JSON in localStorage)
- Last-watched key: `apna-last-watched` (string lectureId)
- Total lectures: 81 (APNA_LECTURES.length from apna-content.ts)
- 15 topics in APNA_TOPICS, organized in APNA_LECTURES_BY_TOPIC
- If Supabase service key becomes available: add `course_id` column to `lectures` table and migrate
