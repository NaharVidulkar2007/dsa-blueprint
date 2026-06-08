// CodeWithHarry course content.
// Lecture videoIds intentionally left as TODO — fill in by hand from playlists.

export type HarryLecture = {
  id: string;
  videoId: string;
  title: string;
  duration: string;
  topicId: string;
};

export type HarryTopic = {
  id: string;
  title: string;
  description: string;
  emoji: string;
};

// ── Progress / last-watched localStorage keys ────────────────────────────────

export const HARRY_JAVA_PROGRESS_KEY = "harry-java-progress";
export const HARRY_CPP_PROGRESS_KEY = "harry-cpp-progress";
export const HARRY_DSA_PROGRESS_KEY = "harry-dsa-progress";
export const HARRY_JAVA_LAST_KEY = "harry-java-last";
export const HARRY_CPP_LAST_KEY = "harry-cpp-last";
export const HARRY_DSA_LAST_KEY = "harry-dsa-last";

// ── Topics ───────────────────────────────────────────────────────────────────

export const HARRY_JAVA_TOPICS: HarryTopic[] = [
  { id: "java-basics",       title: "Variables & I/O",        description: "Data types, literals, input/output",   emoji: "☕" },
  { id: "java-strings",      title: "Strings",                description: "String methods and operations",         emoji: "📝" },
  { id: "java-control",      title: "Control Flow",           description: "Conditionals, switch, loops",           emoji: "🔁" },
  { id: "java-arrays",       title: "Arrays",                 description: "1D, 2D and multidimensional arrays",    emoji: "📦" },
  { id: "java-methods",      title: "Methods",                description: "Functions, recursion, scope",           emoji: "⚙️" },
  { id: "java-oop",          title: "OOP",                    description: "Classes, constructors, inheritance",    emoji: "🎯" },
  { id: "java-advanced-oop", title: "Advanced OOP",           description: "Polymorphism, abstraction, interfaces", emoji: "🔷" },
  { id: "java-exceptions",   title: "Exception Handling",     description: "try/catch, throw, finally",             emoji: "🛡️" },
  { id: "java-collections",  title: "Collections & Generics", description: "ArrayList, HashMap, generics",          emoji: "🗂️" },
  { id: "java-advanced",     title: "Advanced Java",          description: "Threads, file handling, lambda",        emoji: "🚀" },
];

export const HARRY_CPP_TOPICS: HarryTopic[] = [
  { id: "cpp-basics",    title: "C++ Basics",       description: "Variables, operators, I/O",          emoji: "⚡" },
  { id: "cpp-control",   title: "Control Flow",     description: "Conditionals, loops, patterns",      emoji: "🔁" },
  { id: "cpp-functions", title: "Functions",        description: "Functions, recursion, scope",        emoji: "⚙️" },
  { id: "cpp-arrays",    title: "Arrays & Strings", description: "Arrays, 2D arrays, strings",         emoji: "📦" },
  { id: "cpp-pointers",  title: "Pointers",         description: "Pointers, references, memory",       emoji: "🔗" },
  { id: "cpp-oop",       title: "OOP in C++",       description: "Classes, inheritance, polymorphism", emoji: "🎯" },
  { id: "cpp-stl",       title: "STL",              description: "Vectors, maps, sets, algorithms",    emoji: "🗂️" },
];

export const HARRY_DSA_TOPICS: HarryTopic[] = [
  { id: "dsa-intro",       title: "Complexity & Intro",  description: "Big-O, recursion basics",              emoji: "📊" },
  { id: "dsa-arrays",      title: "Arrays & Searching",  description: "Arrays, linear search, binary search", emoji: "📦" },
  { id: "dsa-sorting",     title: "Sorting",             description: "Bubble, merge, quick, count sort",     emoji: "🔀" },
  { id: "dsa-strings",     title: "Strings",             description: "String algorithms",                    emoji: "📝" },
  { id: "dsa-linkedlist",  title: "Linked List",         description: "Singly, doubly, circular",             emoji: "⛓️" },
  { id: "dsa-stack-queue", title: "Stack & Queue",       description: "Stack, queue, deque",                  emoji: "📚" },
  { id: "dsa-trees",       title: "Trees",               description: "Binary trees, BST, AVL",               emoji: "🌳" },
  { id: "dsa-heaps",       title: "Heaps & Hashing",     description: "Heap, HashMap, HashSet",               emoji: "🔷" },
  { id: "dsa-graphs",      title: "Graphs",              description: "BFS, DFS, Dijkstra, MST",              emoji: "🕸️" },
  { id: "dsa-dp",          title: "Dynamic Programming", description: "Memoization, tabulation, patterns",    emoji: "💡" },
  { id: "dsa-advanced",    title: "Advanced Topics",     description: "Trie, segment tree, greedy",           emoji: "🏆" },
];

// ── Lectures (to be filled in manually — do NOT invent videoIds) ─────────────

export const HARRY_JAVA_LECTURES: HarryLecture[] = [
  // Playlist: https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q
  // ~153 videos. Add entries in this format:
  // { id: "hwj-1", videoId: "TODO", title: "...", duration: "mm:ss", topicId: "java-basics" },
];

export const HARRY_CPP_LECTURES: HarryLecture[] = [
  // Playlist: https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL
  // ~100 videos. Format same as above, use id prefix "hwc-", topicIds from HARRY_CPP_TOPICS.
  // { id: "hwc-1", videoId: "TODO", title: "...", duration: "mm:ss", topicId: "cpp-basics" },
];

export const HARRY_DSA_LECTURES: HarryLecture[] = [
  // Playlist: https://youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi
  // ~180 videos. Format same as above, use id prefix "hwd-", topicIds from HARRY_DSA_TOPICS.
  // { id: "hwd-1", videoId: "TODO", title: "...", duration: "mm:ss", topicId: "dsa-intro" },
];

// ── By-topic maps ────────────────────────────────────────────────────────────

export const HARRY_JAVA_BY_TOPIC: Record<string, HarryLecture[]> =
  HARRY_JAVA_TOPICS.reduce((acc, t) => {
    acc[t.id] = HARRY_JAVA_LECTURES.filter((l) => l.topicId === t.id);
    return acc;
  }, {} as Record<string, HarryLecture[]>);

export const HARRY_CPP_BY_TOPIC: Record<string, HarryLecture[]> =
  HARRY_CPP_TOPICS.reduce((acc, t) => {
    acc[t.id] = HARRY_CPP_LECTURES.filter((l) => l.topicId === t.id);
    return acc;
  }, {} as Record<string, HarryLecture[]>);

export const HARRY_DSA_BY_TOPIC: Record<string, HarryLecture[]> =
  HARRY_DSA_TOPICS.reduce((acc, t) => {
    acc[t.id] = HARRY_DSA_LECTURES.filter((l) => l.topicId === t.id);
    return acc;
  }, {} as Record<string, HarryLecture[]>);
