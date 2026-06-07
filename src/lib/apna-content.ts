// Apna College DSA in C++ — by Shradha Khapra
// Playlist: https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt
// 82 curated lectures across 15 topic groups
// Progress: stored in localStorage under APNA_PROGRESS_KEY (no Supabase dependency)

export const APNA_PROGRESS_KEY = "apna-progress";
export const APNA_LAST_WATCHED_KEY = "apna-last-watched";

export type ApnaLecture = {
  id: string;
  videoId: string;
  title: string;
  duration: string;
  topicId: string;
};

export type ApnaTopic = {
  id: string;
  title: string;
  description: string;
  emoji: string;
};

export const APNA_TOPICS: ApnaTopic[] = [
  {
    id: "foundations",
    title: "C++ Foundations",
    description: "Variables, loops, functions & patterns",
    emoji: "🚀",
  },
  {
    id: "bit-manip",
    title: "Bit Manipulation",
    description: "Binary systems & bitwise operators",
    emoji: "⚡",
  },
  {
    id: "complexity",
    title: "Time & Space Complexity",
    description: "Big-O, omega and Master theorem",
    emoji: "📊",
  },
  {
    id: "pointers",
    title: "Pointers & Memory",
    description: "Pointers, heap & stack model",
    emoji: "🔗",
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "1D/2D arrays, vectors, sliding window",
    emoji: "📦",
  },
  {
    id: "searching",
    title: "Searching",
    description: "Linear, binary search & variants",
    emoji: "🔍",
  },
  {
    id: "sorting",
    title: "Sorting",
    description: "Selection, bubble, merge, quick sort",
    emoji: "🔀",
  },
  {
    id: "strings",
    title: "Strings",
    description: "String operations & challenge problems",
    emoji: "📝",
  },
  {
    id: "math",
    title: "Math Fundamentals",
    description: "Sieve, GCD & number theory",
    emoji: "🧮",
  },
  {
    id: "recursion",
    title: "Recursion",
    description: "Recursive thinking, patterns & problems",
    emoji: "🔄",
  },
  {
    id: "backtracking",
    title: "Backtracking",
    description: "Permutations, N-Queens, Rat in maze",
    emoji: "🌿",
  },
  {
    id: "oop",
    title: "OOP in C++",
    description: "Classes, inheritance, polymorphism",
    emoji: "🎯",
  },
  {
    id: "linked-list",
    title: "Linked List",
    description: "Singly, doubly & circular linked lists",
    emoji: "⛓️",
  },
  {
    id: "stack",
    title: "Stack",
    description: "Stack ops, expression evaluation",
    emoji: "📚",
  },
  {
    id: "queue",
    title: "Queue",
    description: "Queue structure & linked-list impl.",
    emoji: "🚦",
  },
];

export const APNA_LECTURES: ApnaLecture[] = [
  // ── C++ Foundations ──────────────────────────────────────────────────────────
  {
    id: "apna-f1",
    videoId: "z9bZufPHFLU",
    title: "Introduction to C++",
    duration: "26:03",
    topicId: "foundations",
  },
  {
    id: "apna-f2",
    videoId: "VTLCoHnyACE",
    title: "Flowchart & Pseudocode + Installation",
    duration: "1:25:52",
    topicId: "foundations",
  },
  {
    id: "apna-f3",
    videoId: "Dxu7GKtdbnA",
    title: "Variables, Data Types & Operators",
    duration: "1:16:44",
    topicId: "foundations",
  },
  {
    id: "apna-f4",
    videoId: "qR9U6bKxJ7g",
    title: "Conditional Statements & Loops",
    duration: "1:34:39",
    topicId: "foundations",
  },
  {
    id: "apna-f5",
    videoId: "rga_q2N7vU8",
    title: "Patterns",
    duration: "1:31:07",
    topicId: "foundations",
  },
  {
    id: "apna-f6",
    videoId: "P08Z_NC8GuY",
    title: "Functions",
    duration: "49:13",
    topicId: "foundations",
  },

  // ── Bit Manipulation ─────────────────────────────────────────────────────────
  {
    id: "apna-b1",
    videoId: "xpy5NXiBFvA",
    title: "Binary Number System",
    duration: "37:20",
    topicId: "bit-manip",
  },
  {
    id: "apna-b2",
    videoId: "r-u4uh3QvsQ",
    title: "Bitwise Operators & Data Type Modifiers",
    duration: "38:33",
    topicId: "bit-manip",
  },
  {
    id: "apna-b3",
    videoId: "MiJdgxTWaFs",
    title: "Bit Manipulation in 11 Minutes",
    duration: "10:46",
    topicId: "bit-manip",
  },
  {
    id: "apna-b4",
    videoId: "s8l8NWII3qw",
    title: "Bit Manipulation — Challenges",
    duration: "15:30",
    topicId: "bit-manip",
  },

  // ── Time & Space Complexity ───────────────────────────────────────────────────
  {
    id: "apna-c1",
    videoId: "PwKv8fOcriM",
    title: "Time & Space Complexity",
    duration: "1:25:41",
    topicId: "complexity",
  },
  {
    id: "apna-c2",
    videoId: "rq_rwnveh8s",
    title: "Time Complexity — Deep Dive",
    duration: "30:45",
    topicId: "complexity",
  },
  {
    id: "apna-c3",
    videoId: "oZ-ZIhJyy9o",
    title: "Time Complexity — Master's Theorem",
    duration: "6:55",
    topicId: "complexity",
  },

  // ── Pointers & Memory ─────────────────────────────────────────────────────────
  {
    id: "apna-p1",
    videoId: "qYEjR6M0wSk",
    title: "Pointers in C++ — Full Guide",
    duration: "46:08",
    topicId: "pointers",
  },
  {
    id: "apna-p2",
    videoId: "gHxmAgedyDk",
    title: "Pointers in C++",
    duration: "19:03",
    topicId: "pointers",
  },
  {
    id: "apna-p3",
    videoId: "bbym08gSWvQ",
    title: "Stack & Heap Memory",
    duration: "11:02",
    topicId: "pointers",
  },

  // ── Arrays ───────────────────────────────────────────────────────────────────
  {
    id: "apna-a1",
    videoId: "8wmn7k1TTcI",
    title: "Array Data Structure — Part 1",
    duration: "54:07",
    topicId: "arrays",
  },
  {
    id: "apna-a2",
    videoId: "NWg38xWYzEg",
    title: "Vectors in C++ — Arrays Part 2",
    duration: "40:06",
    topicId: "arrays",
  },
  {
    id: "apna-a3",
    videoId: "9IZYqostl2M",
    title: "Kadane's Algorithm — Max Subarray Sum",
    duration: "23:29",
    topicId: "arrays",
  },
  {
    id: "apna-a4",
    videoId: "_xqIp2rj8bo",
    title: "Majority Element — Moore's Voting",
    duration: "39:10",
    topicId: "arrays",
  },
  {
    id: "apna-a5",
    videoId: "EbkMABpP52U",
    title: "Container with Most Water",
    duration: "32:00",
    topicId: "arrays",
  },
  {
    id: "apna-a6",
    videoId: "TW2m8m_FNJE",
    title: "Product of Array Except Self",
    duration: "29:30",
    topicId: "arrays",
  },
  {
    id: "apna-a7",
    videoId: "PyTK_g1l8V8",
    title: "Introduction to Arrays",
    duration: "12:32",
    topicId: "arrays",
  },
  {
    id: "apna-a8",
    videoId: "eJcBH0xvG98",
    title: "Array Challenges",
    duration: "39:41",
    topicId: "arrays",
  },
  {
    id: "apna-a9",
    videoId: "kJW_iXrwePE",
    title: "Arrays — Top MNC Questions",
    duration: "23:51",
    topicId: "arrays",
  },
  {
    id: "apna-a10",
    videoId: "0JYgnhnZFcE",
    title: "Subarrays — Challenges",
    duration: "32:18",
    topicId: "arrays",
  },
  {
    id: "apna-a11",
    videoId: "Xx1tWbb37hY",
    title: "2D Arrays",
    duration: "21:24",
    topicId: "arrays",
  },
  {
    id: "apna-a12",
    videoId: "xKZFAkSt2UU",
    title: "2D Array Challenges",
    duration: "24:03",
    topicId: "arrays",
  },
  {
    id: "apna-a13",
    videoId: "TkTgo_7ab0M",
    title: "Character Arrays",
    duration: "12:53",
    topicId: "arrays",
  },

  // ── Searching ────────────────────────────────────────────────────────────────
  {
    id: "apna-s1",
    videoId: "TbbSJrY5GqQ",
    title: "Binary Search — Iterative & Recursive",
    duration: "44:16",
    topicId: "searching",
  },
  {
    id: "apna-s2",
    videoId: "13ocRMSJy5M",
    title: "Searching in Arrays — Linear & Binary",
    duration: "13:26",
    topicId: "searching",
  },
  {
    id: "apna-s3",
    videoId: "6WNZQBHWQJs",
    title: "Search in Rotated Sorted Array",
    duration: "19:30",
    topicId: "searching",
  },
  {
    id: "apna-s4",
    videoId: "RjxD6UXGlhc",
    title: "Peak Index in Mountain Array",
    duration: "23:34",
    topicId: "searching",
  },
  {
    id: "apna-s5",
    videoId: "qsbCBduIs40",
    title: "Single Element in Sorted Array",
    duration: "27:33",
    topicId: "searching",
  },

  // ── Sorting ──────────────────────────────────────────────────────────────────
  {
    id: "apna-so1",
    videoId: "dQa4A2Z0_Ro",
    title: "Selection Sort",
    duration: "8:32",
    topicId: "sorting",
  },
  {
    id: "apna-so2",
    videoId: "xcPFUCh0jT0",
    title: "Bubble Sort",
    duration: "6:46",
    topicId: "sorting",
  },
  {
    id: "apna-so3",
    videoId: "3GC83dh4cf0",
    title: "Insertion Sort",
    duration: "9:37",
    topicId: "sorting",
  },
  {
    id: "apna-so4",
    videoId: "4z9I6ZmeLOQ",
    title: "Merge Sort",
    duration: "17:10",
    topicId: "sorting",
  },
  {
    id: "apna-so5",
    videoId: "Dl6HT-NM_q4",
    title: "Quick Sort",
    duration: "15:24",
    topicId: "sorting",
  },
  {
    id: "apna-so6",
    videoId: "yoZy5RicIPc",
    title: "Vectors and Pairs",
    duration: "15:30",
    topicId: "sorting",
  },
  {
    id: "apna-so7",
    videoId: "imqr13aIBAY",
    title: "Count Sort",
    duration: "11:18",
    topicId: "sorting",
  },
  {
    id: "apna-so8",
    videoId: "2C4CQ32961Y",
    title: "DNF Sort (Dutch National Flag)",
    duration: "8:33",
    topicId: "sorting",
  },
  {
    id: "apna-so9",
    videoId: "N97M67GQTwI",
    title: "Wave Sort",
    duration: "7:30",
    topicId: "sorting",
  },
  {
    id: "apna-so10",
    videoId: "sV4RhDIIKO0",
    title: "Count Inversions — Merge Sort",
    duration: "9:07",
    topicId: "sorting",
  },

  // ── Strings ──────────────────────────────────────────────────────────────────
  {
    id: "apna-str1",
    videoId: "W8hPsBquD6Y",
    title: "Strings in C++",
    duration: "23:40",
    topicId: "strings",
  },
  {
    id: "apna-str2",
    videoId: "1pVI0yiEBR8",
    title: "String Challenges",
    duration: "11:52",
    topicId: "strings",
  },

  // ── Math ─────────────────────────────────────────────────────────────────────
  {
    id: "apna-m1",
    videoId: "nDPo9hsDNvU",
    title: "Sieve of Eratosthenes",
    duration: "10:47",
    topicId: "math",
  },
  {
    id: "apna-m2",
    videoId: "IW4hJEgZLWI",
    title: "Inclusion-Exclusion & GCD",
    duration: "7:07",
    topicId: "math",
  },

  // ── Recursion ────────────────────────────────────────────────────────────────
  {
    id: "apna-r1",
    videoId: "oSQbwlepoCU",
    title: "Recursion — Introduction",
    duration: "23:51",
    topicId: "recursion",
  },
  {
    id: "apna-r2",
    videoId: "7F3MYyw3Jmg",
    title: "Recursion Challenges",
    duration: "17:40",
    topicId: "recursion",
  },
  {
    id: "apna-r3",
    videoId: "j9RG18jfnRY",
    title: "7 Best Problems on Recursion",
    duration: "34:05",
    topicId: "recursion",
  },
  {
    id: "apna-r4",
    videoId: "9rt-hFcXd0M",
    title: "Advanced Recursion Problems",
    duration: "16:29",
    topicId: "recursion",
  },
  {
    id: "apna-r5",
    videoId: "VQVeAQVs1d8",
    title: "Recursion — Final Advanced Problems",
    duration: "19:23",
    topicId: "recursion",
  },

  // ── Backtracking ─────────────────────────────────────────────────────────────
  {
    id: "apna-bt1",
    videoId: "28okqq8raXM",
    title: "Permutations — Return All Possible",
    duration: "14:39",
    topicId: "backtracking",
  },
  {
    id: "apna-bt2",
    videoId: "4BBB0mvvbGA",
    title: "Rat in a Maze — Backtracking",
    duration: "18:27",
    topicId: "backtracking",
  },
  {
    id: "apna-bt3",
    videoId: "1OkZKjxRokU",
    title: "N-Queen Problem",
    duration: "17:14",
    topicId: "backtracking",
  },

  // ── OOP ──────────────────────────────────────────────────────────────────────
  {
    id: "apna-oop1",
    videoId: "YscEcXRmBoY",
    title: "OOP in C++ — Key Concepts",
    duration: "21:29",
    topicId: "oop",
  },
  {
    id: "apna-oop2",
    videoId: "7ZfEp71tIec",
    title: "Inheritance in C++",
    duration: "8:45",
    topicId: "oop",
  },
  {
    id: "apna-oop3",
    videoId: "F5PbnZkHqmg",
    title: "Polymorphism in C++",
    duration: "10:09",
    topicId: "oop",
  },

  // ── Linked List ──────────────────────────────────────────────────────────────
  {
    id: "apna-ll1",
    videoId: "Crqgl10aIGQ",
    title: "Introduction to Linked List",
    duration: "15:17",
    topicId: "linked-list",
  },
  {
    id: "apna-ll2",
    videoId: "kvk8gfAJLeg",
    title: "Deletion in Linked List",
    duration: "6:22",
    topicId: "linked-list",
  },
  {
    id: "apna-ll3",
    videoId: "bjtMCwy_LMA",
    title: "Reverse a Linked List",
    duration: "9:03",
    topicId: "linked-list",
  },
  {
    id: "apna-ll4",
    videoId: "LCRGV8avvUY",
    title: "Reverse K Nodes in Linked List",
    duration: "6:43",
    topicId: "linked-list",
  },
  {
    id: "apna-ll5",
    videoId: "Fj1ywT9ETQk",
    title: "Cycle Detection & Removal",
    duration: "14:11",
    topicId: "linked-list",
  },
  {
    id: "apna-ll6",
    videoId: "c_dqAyQu84A",
    title: "Doubly Linked List",
    duration: "12:01",
    topicId: "linked-list",
  },
  {
    id: "apna-ll7",
    videoId: "v6g1g4lNowM",
    title: "Append Last K Nodes",
    duration: "6:07",
    topicId: "linked-list",
  },
  {
    id: "apna-ll8",
    videoId: "8CACsqPWpHo",
    title: "Intersection of Two Linked Lists",
    duration: "8:30",
    topicId: "linked-list",
  },
  {
    id: "apna-ll9",
    videoId: "n5_9DMCX0Yk",
    title: "Merge 2 Sorted Linked Lists",
    duration: "9:02",
    topicId: "linked-list",
  },
  {
    id: "apna-ll10",
    videoId: "1t8NAjIXvVA",
    title: "Circular Linked List",
    duration: "13:22",
    topicId: "linked-list",
  },
  {
    id: "apna-ll11",
    videoId: "TaNfBSbpX_o",
    title: "Even/Odd Position Node Rearrangement",
    duration: "6:14",
    topicId: "linked-list",
  },

  // ── Stack ────────────────────────────────────────────────────────────────────
  {
    id: "apna-stk1",
    videoId: "JvuaAgDar1c",
    title: "Stack — Introduction",
    duration: "10:14",
    topicId: "stack",
  },
  {
    id: "apna-stk2",
    videoId: "k1O1PhuarpI",
    title: "Reverse a Sentence using Stack",
    duration: "5:38",
    topicId: "stack",
  },
  {
    id: "apna-stk3",
    videoId: "V2reKQOgE88",
    title: "Reverse a Stack",
    duration: "8:21",
    topicId: "stack",
  },
  {
    id: "apna-stk4",
    videoId: "6T3jMNUCRNU",
    title: "Prefix, Infix & Postfix — Introduction",
    duration: "11:21",
    topicId: "stack",
  },
  {
    id: "apna-stk5",
    videoId: "MuF5p8-oWc8",
    title: "Prefix Expression Evaluation",
    duration: "6:39",
    topicId: "stack",
  },
  {
    id: "apna-stk6",
    videoId: "5B6jw4wOJR0",
    title: "Postfix Expression Evaluation",
    duration: "8:24",
    topicId: "stack",
  },
  {
    id: "apna-stk7",
    videoId: "mg9yi6YuAVk",
    title: "Infix to Postfix Conversion",
    duration: "7:48",
    topicId: "stack",
  },
  {
    id: "apna-stk8",
    videoId: "snDDBjT8jYA",
    title: "Infix to Prefix Conversion",
    duration: "9:59",
    topicId: "stack",
  },
  {
    id: "apna-stk9",
    videoId: "P31WyOcQvaE",
    title: "Balanced Parenthesis",
    duration: "7:45",
    topicId: "stack",
  },

  // ── Queue ─────────────────────────────────────────────────────────────────────
  {
    id: "apna-q1",
    videoId: "fbonDkYsKj0",
    title: "Queue — Introduction",
    duration: "11:42",
    topicId: "queue",
  },
  {
    id: "apna-q2",
    videoId: "Yi8Im4_eSQI",
    title: "Queue — Linked List Implementation",
    duration: "6:17",
    topicId: "queue",
  },
  // ── Trees ─────────────────────────────────────────────────────────────

  {
    id: "apna-tree-1",
    videoId: "ctCpP0RFDFc",
    title: "Binary Trees Introduction",
    duration: "25:14",
    topicId: "trees",
  },

  {
    id: "apna-tree-2",
    videoId: "9GMECGQgWrQ",
    title: "Binary Tree Traversals",
    duration: "31:45",
    topicId: "trees",
  },

  {
    id: "apna-tree-3",
    videoId: "fAAZixBzIAI",
    title: "Binary Search Trees",
    duration: "27:18",
    topicId: "trees",
  },

  // ── Graphs ────────────────────────────────────────────────────────────

  {
    id: "apna-graph-1",
    videoId: "59fUtYYz7ZU",
    title: "Introduction to Graphs",
    duration: "21:34",
    topicId: "graphs",
  },

  {
    id: "apna-graph-2",
    videoId: "gGlfzqPT-hE",
    title: "Breadth First Search (BFS)",
    duration: "18:29",
    topicId: "graphs",
  },

  {
    id: "apna-graph-3",
    videoId: "Qzf1a--rhp8",
    title: "Depth First Search (DFS)",
    duration: "20:11",
    topicId: "graphs",
  },

  // ── Dynamic Programming ───────────────────────────────────────────────

  {
    id: "apna-dp-1",
    videoId: "mBk4I0X46oI",
    title: "Dynamic Programming Introduction",
    duration: "29:50",
    topicId: "dp",
  },

  {
    id: "apna-dp-2",
    videoId: "oBt53YbR9Kk",
    title: "Memoization vs Tabulation",
    duration: "24:31",
    topicId: "dp",
  },

  {
    id: "apna-dp-3",
    videoId: "tyB0ztf0DNY",
    title: "0/1 Knapsack Problem",
    duration: "34:12",
    topicId: "dp",
  },
];

/** Lectures grouped by topic, in the same order as APNA_TOPICS */
export const APNA_LECTURES_BY_TOPIC: Record<string, ApnaLecture[]> = APNA_TOPICS.reduce(
  (acc, t) => {
    acc[t.id] = APNA_LECTURES.filter((l) => l.topicId === t.id);
    return acc;
  },
  {} as Record<string, ApnaLecture[]>,
);
