---
name: Course routing pattern (TanStack Router)
description: How both course routes handle lectureId without nested layouts
---

**Rule:** Each course uses a parent route file + a child stub. Parent reads lectureId via `useParams({ strict: false })`. Child stub returns null.

**Why:** TanStack Router file-based routing requires the child route file (`course.$lectureId.tsx`, `apna.$lectureId.tsx`) to exist for the URL `/course/:id` and `/apna/:id` to resolve, but the actual rendering is done entirely by the parent.

**How to apply:**
- `/course` + `/course/$lectureId` → `src/routes/course.tsx` + `src/routes/course.$lectureId.tsx`
- `/apna` + `/apna/$lectureId` → `src/routes/apna.tsx` + `src/routes/apna.$lectureId.tsx`
- Auto-redirect in useEffect: navigate to last-watched (from Supabase or localStorage) or first lecture when no lectureId in params
