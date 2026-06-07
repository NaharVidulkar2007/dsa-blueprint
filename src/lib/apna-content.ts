// Apna College DSA in C++ — by Shradha Khapra
// Playlist: https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt
// 136 lectures from the official playlist, grouped by topic
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
  { id: "foundations", title: "C++ Foundations", description: "Variables, loops, functions, STL", emoji: "🚀" },
  { id: "bit-manip", title: "Bit Manipulation", description: "Binary systems & bitwise operators", emoji: "⚡" },
  { id: "complexity", title: "Time & Space Complexity", description: "Big-O analysis", emoji: "📊" },
  { id: "pointers", title: "Pointers & Memory", description: "Pointers, heap & stack model", emoji: "🔗" },
  { id: "arrays", title: "Arrays", description: "1D/2D arrays, vectors, hashing", emoji: "📦" },
  { id: "searching", title: "Searching", description: "Binary search & variants", emoji: "🔍" },
  { id: "sorting", title: "Sorting", description: "Selection, bubble, merge, quick sort", emoji: "🔀" },
  { id: "strings", title: "Strings", description: "String operations & problems", emoji: "📝" },
  { id: "math", title: "Math Fundamentals", description: "Sieve, GCD & number theory", emoji: "🧮" },
  { id: "recursion", title: "Recursion", description: "Recursive thinking & problems", emoji: "🔄" },
  { id: "backtracking", title: "Backtracking", description: "Permutations, N-Queens, Sudoku", emoji: "🌿" },
  { id: "oop", title: "OOP in C++", description: "Classes, inheritance, polymorphism", emoji: "🎯" },
  { id: "linked-list", title: "Linked List", description: "Singly, doubly & circular lists", emoji: "⛓️" },
  { id: "stack", title: "Stack", description: "Stack ops, monotonic stack", emoji: "📚" },
  { id: "queue", title: "Queue", description: "Queue, deque, sliding window", emoji: "🚦" },
  { id: "trees", title: "Trees & BST", description: "Binary trees, BST, traversals", emoji: "🌳" },
  { id: "graphs", title: "Graphs", description: "BFS/DFS, MST, shortest paths", emoji: "🕸️" },
];

export const APNA_LECTURES: ApnaLecture[] = [

  // ── foundations ──
  { id: "apna-f1", videoId: "VTLCoHnyACE", title: "Flowchart & Pseudocode + Installation", duration: "DSA Series by Shradha Khapra Ma'am | C++|1:25:52", topicId: "foundations" },
  { id: "apna-f2", videoId: "Dxu7GKtdbnA", title: "Variable, Data Types & Operators", duration: "DSA Series by Shradha Ma'am | C++|1:16:44", topicId: "foundations" },
  { id: "apna-f3", videoId: "qR9U6bKxJ7g", title: "Conditional Statements & Loops", duration: "DSA Series by Shradha Ma'am | C++|1:34:39", topicId: "foundations" },
  { id: "apna-f4", videoId: "rga_q2N7vU8", title: "Patterns", duration: "DSA Series by Shradha Khapra Ma'am | C++|1:31:07", topicId: "foundations" },
  { id: "apna-f5", videoId: "P08Z_NC8GuY", title: "Functions", duration: "DSA Series by Shradha Khapra Ma'am | C++|49:13", topicId: "foundations" },
  { id: "apna-f6", videoId: "okhdtEk1iKk", title: "C++ STL Complete Tutorial", duration: "Standard Template Library - One Shot|1:27:20", topicId: "foundations" },
  { id: "apna-f7", videoId: "varXreLWPRo", title: "How to setup C++ compiler on Mac ?", duration: "Software Installation for Mac users|1:40", topicId: "foundations" },
  { id: "apna-f8", videoId: "SBQfXK7q5K4", title: "One Major update & reaching 1000M views", duration: "3:50", topicId: "foundations" },
  { id: "apna-f9", videoId: "3rFHlbJ7qKc", title: "Bellman Ford Algorithm - Single Source Shortest Path - Dynamic Programming", duration: "23:38", topicId: "foundations" },

  // ── bit-manip ──
  { id: "apna-b1", videoId: "xpy5NXiBFvA", title: "Binary Number System", duration: "DSA Series by Shradha Khapra Ma'am | C++|37:20", topicId: "bit-manip" },
  { id: "apna-b2", videoId: "r-u4uh3QvsQ", title: "Bitwise Operators, Data Type Modifiers & more", duration: "DSA Series by Shradha Khapra Ma'am | C++|38:33", topicId: "bit-manip" },

  // ── complexity ──
  { id: "apna-c1", videoId: "PwKv8fOcriM", title: "Time & Space Complexity - DSA Series by Shradha Ma'am", duration: "1:25:41", topicId: "complexity" },

  // ── pointers ──
  { id: "apna-p1", videoId: "qYEjR6M0wSk", title: "Pointers in C++", duration: "In Detail | DSA Series by Shradha Ma'am|46:08", topicId: "pointers" },

  // ── arrays ──
  { id: "apna-a1", videoId: "8wmn7k1TTcI", title: "Array Data Structure - Part1", duration: "DSA Series by Shradha Khapra Ma'am | C++|54:07", topicId: "arrays" },
  { id: "apna-a2", videoId: "NWg38xWYzEg", title: "Vectors in C++", duration: "Arrays Part 2 | DSA Series by Shradha Ma'am | Lecture 9|40:06", topicId: "arrays" },
  { id: "apna-a3", videoId: "9IZYqostl2M", title: "Kadane's Algorithm", duration: "Maximum Subarray Sum | DSA Series by Shradha Ma'am|23:29", topicId: "arrays" },
  { id: "apna-a4", videoId: "_xqIp2rj8bo", title: "Majority Element", duration: "Brute- Better-Best Approach | Moore's Voting Algorithm | & Pair Sum|39:10", topicId: "arrays" },
  { id: "apna-a5", videoId: "WBzZCm46mFo", title: "Buy and Sell Stock Problem and Pow(X,N) Power exponential Problem - Leetcode", duration: "DSA Series|29:10", topicId: "arrays" },
  { id: "apna-a6", videoId: "EbkMABpP52U", title: "Container with Most Water Problem", duration: "Brute & Optimal Solution | Two Pointer Approach - Leetcode 11|32:00", topicId: "arrays" },
  { id: "apna-a7", videoId: "TW2m8m_FNJE", title: "Product of Array Except Self", duration: "Brute to Optimal Solution | Leetcode 238|29:30", topicId: "arrays" },
  { id: "apna-a8", videoId: "lBL8327gq8I", title: "2D Arrays in C++", duration: "Part 1 | DSA Series by Shradha Ma'am|37:31", topicId: "arrays" },
  { id: "apna-a9", videoId: "LEFFjgt5i6w", title: "Search a 2D Matrix - Variation I & II", duration: "2D Arrays - Part 2 | DSA Series by Shradha Ma'am|37:43", topicId: "arrays" },
  { id: "apna-a10", videoId: "XMpdvwUObho", title: "Spiral Matrix", duration: "2D Arrays - Part 3 | Leetcode 54 | DSA Series by Shradha Ma'am|24:33", topicId: "arrays" },
  { id: "apna-a11", videoId: "0Fxc_jKj2vo", title: "Two Sum", duration: "Find Duplicate | Find Repeating & Missing Values | Hashing Problems|53:30", topicId: "arrays" },
  { id: "apna-a12", videoId: "K-RsltkN63w", title: "3 Sum", duration: "Brute, Better & Optimized Approach with Codes | Leetcode 15|43:43", topicId: "arrays" },
  { id: "apna-a13", videoId: "X6sL8JTROLY", title: "4 Sum Problem", duration: "Optimal Approach | DSA Series by Shradha Ma'am|23:02", topicId: "arrays" },
  { id: "apna-a14", videoId: "KDH4mhFVvHw", title: "Subarray Sum Equals K", duration: "Brute-Better-Optimal approach|34:45", topicId: "arrays" },

  // ── searching ──
  { id: "apna-s1", videoId: "TbbSJrY5GqQ", title: "Binary Search Algorithm - Iterative and Recursive Method", duration: "[Theory + Code] with Example|44:16", topicId: "searching" },
  { id: "apna-s2", videoId: "6WNZQBHWQJs", title: "Search in Rotated Sorted Array", duration: "Binary Search | Leetcode 33|19:30", topicId: "searching" },
  { id: "apna-s3", videoId: "RjxD6UXGlhc", title: "Peak Index in Mountain Array", duration: "Binary Search | Leetcode 852|23:34", topicId: "searching" },
  { id: "apna-s4", videoId: "qsbCBduIs40", title: "Single Element in Sorted Array", duration: "Binary Search | DSA Series Lecture 20|27:33", topicId: "searching" },
  { id: "apna-s5", videoId: "JRAByolWqhw", title: "Book Allocation or Allocate Books Problem", duration: "DSA Series - Binary Search|32:59", topicId: "searching" },
  { id: "apna-s6", videoId: "srsFN5OHBgw", title: "Painter's Partition Problem", duration: "DSA Placement Series - Binary Search | Lecture 22|27:44", topicId: "searching" },
  { id: "apna-s7", videoId: "7wOzDqsfXy0", title: "Aggressive Cows Problem", duration: "DSA Placement Series - Binary Search | Lecture 23|30:12", topicId: "searching" },

  // ── sorting ──
  { id: "apna-so1", videoId: "1jCFUv-Xlqo", title: "Sorting Algorithms", duration: "Bubble Sort, Selection Sort & Insertion Sort | DSA Series by Shradha Ma'am|34:33", topicId: "sorting" },
  { id: "apna-so2", videoId: "J48aGjfjYTI", title: "Sort an Array of 0s, 1s & 2s", duration: "DNF Sorting Algorithm | Leetcode 75|33:39", topicId: "sorting" },
  { id: "apna-so3", videoId: "-1cLK6PaLsQ", title: "Merge Sorted Arrays Problem and Next Permutation Problem", duration: "DSA Series|43:49", topicId: "sorting" },
  { id: "apna-so4", videoId: "cQDtOBTy7_Y", title: "Merge Sort Algorithm", duration: "Recursion & Backtracking|32:04", topicId: "sorting" },
  { id: "apna-so5", videoId: "8MNB0Mba_Dc", title: "Quick Sort Algorithm - Lecture 51 of Complete DSA Placement Series", duration: "26:23", topicId: "sorting" },
  { id: "apna-so6", videoId: "ynnWDBTdVi0", title: "Count Inversions Problem", duration: "Brute and Optimal|24:33", topicId: "sorting" },

  // ── strings ──
  { id: "apna-str1", videoId: "MOSjYaVymcU", title: "Strings & Character Arrays in C++  -  Part 1", duration: "DSA Placement Series|30:03", topicId: "strings" },
  { id: "apna-str2", videoId: "dSRFgEs3a6A", title: "Valid Palindrome & Remove all Occurrences", duration: "Strings Part 2 | DSA Placement Series|24:02", topicId: "strings" },
  { id: "apna-str3", videoId: "VXewy91P0S4", title: "Strings - Part 3", duration: "Permutation in String | DSA Placement Series|21:41", topicId: "strings" },
  { id: "apna-str4", videoId: "RitppzIdMCo", title: "Strings - Part 4", duration: "Reverse Words in String | DSA Placement Series|14:42", topicId: "strings" },
  { id: "apna-str5", videoId: "cAB15h6-sWA", title: "String Compression problem - Lecture 32", duration: "Leetcode 443|19:29", topicId: "strings" },

  // ── math ──
  { id: "apna-m1", videoId: "Y4KdgqV1IqA", title: "Maths for DSA - One Shot", duration: "Euclid's Algorithm | Sieve of Eratosthenes | Modular Arithmetics|55:48", topicId: "math" },

  // ── recursion ──
  { id: "apna-r1", videoId: "9OsMG4fI4OY", title: "Recursion Tutorial - Basics to Advanced", duration: "Part 1|46:22", topicId: "recursion" },
  { id: "apna-r2", videoId: "4iT-GhvSKzc", title: "Recursion Part 2 : Fibonacci numbers problem, Binary search problem, Find if array sorted problem", duration: "41:30", topicId: "recursion" },

  // ── backtracking ──
  { id: "apna-bt1", videoId: "pNzljlzDCiI", title: "Recursion Part 3 : Backtracking in Detail", duration: "Print all Subsets | Subsets II|42:20", topicId: "backtracking" },
  { id: "apna-bt2", videoId: "N4gJDGdhpLw", title: "Permutations of an Array/String", duration: "Recursion & Backtracking|22:55", topicId: "backtracking" },
  { id: "apna-bt3", videoId: "BdSJnIdR-4s", title: "N-Queens Problem", duration: "using Backtracking | Leetcode Hard|24:26", topicId: "backtracking" },
  { id: "apna-bt4", videoId: "70cP3qtJp-s", title: "Sudoku Solver Problem", duration: "using Backtracking | Leetcode Hard|26:58", topicId: "backtracking" },
  { id: "apna-bt5", videoId: "D8Yze9CDDAw", title: "Rat in a Maze Problem", duration: "Backtracking|32:45", topicId: "backtracking" },
  { id: "apna-bt6", videoId: "jkgZw2WEaqA", title: "Combination Sum Problem", duration: "Recursion & Backtracking|23:35", topicId: "backtracking" },
  { id: "apna-bt7", videoId: "aZ0B1eWkSVU", title: "Palindrome Partitioning Problem", duration: "Recursion & Backtracking|20:44", topicId: "backtracking" },
  { id: "apna-bt8", videoId: "Sp1jzttFVdE", title: "KNIGHTS TOUR Problem - Backtracking", duration: "Leetcode 2596|22:32", topicId: "backtracking" },

  // ── oop ──
  { id: "apna-oop1", videoId: "mlIUKyZIUUU", title: "OOPs Tutorial in One Shot", duration: "Object Oriented Programming | in C++ Language | for Placement Interviews|2:04:23", topicId: "oop" },

  // ── linked-list ──
  { id: "apna-ll1", videoId: "LyuuqCVkP5I", title: "Introduction to Linked List", duration: "Data Structures & Algorithms|50:43", topicId: "linked-list" },
  { id: "apna-ll2", videoId: "R-CKBYnOv1U", title: "Reverse a Linked List", duration: "DSA Series by @shradhaKD|10:29", topicId: "linked-list" },
  { id: "apna-ll3", videoId: "nzaHG0dme4g", title: "Middle of a Linked List", duration: "DSA Series by @shradhaKD|10:32", topicId: "linked-list" },
  { id: "apna-ll4", videoId: "-1E8ZMS0gSs", title: "Detect & Remove Cycle in Linked List", duration: "DSA Series by @shradhaKD|30:24", topicId: "linked-list" },
  { id: "apna-ll5", videoId: "f8RPIb-0DDE", title: "Merge Two Sorted Lists", duration: "DSA Series by @shradhaKD|12:41", topicId: "linked-list" },
  { id: "apna-ll6", videoId: "8ze7Zopdsaw", title: "Copy List with Random Pointer", duration: "DSA Series by @shradhaKD|20:52", topicId: "linked-list" },
  { id: "apna-ll7", videoId: "bO5DasTsaRQ", title: "Doubly Linked List Tutorial", duration: "32:16", topicId: "linked-list" },
  { id: "apna-ll8", videoId: "e6lZY5Yha8U", title: "Circular Linked List in Data Structures", duration: "33:56", topicId: "linked-list" },
  { id: "apna-ll9", videoId: "I8b0rff5F9M", title: "Flatten a Doubly Linked List", duration: "Leetcode 430 | DSA Series by @shradhaKD|24:47", topicId: "linked-list" },
  { id: "apna-ll10", videoId: "-swgIiMIlJo", title: "Reverse Nodes in K-Group", duration: "Linked List|20:39", topicId: "linked-list" },
  { id: "apna-ll11", videoId: "wwbTMNVlFHQ", title: "Swap Nodes in Pairs", duration: "Linked List|20:06", topicId: "linked-list" },

  // ── stack ──
  { id: "apna-stk1", videoId: "0X-fV-1ir9c", title: "Introduction to STACKS", duration: "Data Structures & Algorithms | Lecture 66|22:11", topicId: "stack" },
  { id: "apna-stk2", videoId: "NlHupEeDXzY", title: "Valid Parentheses", duration: "Stack | Lecture 67|16:25", topicId: "stack" },
  { id: "apna-stk3", videoId: "01vBuZyMfqk", title: "Stock Span Problem", duration: "Optimal Solution|26:29", topicId: "stack" },
  { id: "apna-stk4", videoId: "NKbExYwvjb0", title: "Next Greater Element", duration: "Optimal Solution & Code|23:32", topicId: "stack" },
  { id: "apna-stk5", videoId: "WnjUfBn9nZM", title: "Previous Smaller Element", duration: "Optimal Solution & Code|9:24", topicId: "stack" },
  { id: "apna-stk6", videoId: "wHDm-N2m2XY", title: "Design a Min Stack", duration: "Optimal Solution & Code|24:34", topicId: "stack" },
  { id: "apna-stk7", videoId: "ysy1o-QEj3k", title: "Largest Rectangle in Histogram", duration: "Best Solution & Code|32:56", topicId: "stack" },
  { id: "apna-stk8", videoId: "If--3pm9K3U", title: "Next Greater Element - II", duration: "Stack & Queue|20:04", topicId: "stack" },
  { id: "apna-stk9", videoId: "UHHp8USwx4M", title: "Trapping Rainwater Problem", duration: "Optimal Solution & Code|30:50", topicId: "stack" },
  { id: "apna-stk10", videoId: "OZPmEA_8FM8", title: "The Celebrity Problem", duration: "Stack & Queue|15:11", topicId: "stack" },
  { id: "apna-stk11", videoId: "GsY6y0iPaHw", title: "Implement LRU Cache", duration: "Linked List|35:34", topicId: "stack" },

  // ── queue ──
  { id: "apna-q1", videoId: "Khf9v67Ya30", title: "New Chapter : Queue Data Structure", duration: "18:55", topicId: "queue" },
  { id: "apna-q2", videoId: "4mKKolshFD0", title: "Circular Queue in Data Strucuture", duration: "18:37", topicId: "queue" },
  { id: "apna-q3", videoId: "sFvP5Ois0CE", title: "Implement Queue using Stack & Stack using Queue", duration: "15:47", topicId: "queue" },
  { id: "apna-q4", videoId: "sqyCBvEQN9c", title: "First Unique Character in String", duration: "Easy - Leetcode387|13:23", topicId: "queue" },
  { id: "apna-q5", videoId: "XwG5cozqfaM", title: "Sliding Window Maximum", duration: "Queue|31:22", topicId: "queue" },
  { id: "apna-q6", videoId: "SmTow5Ht4iU", title: "Gas Station", duration: "Greedy Approach | Leetcode 134|22:16", topicId: "queue" },

  // ── trees ──
  { id: "apna-tree1", videoId: "eKJrXBCRuNQ", title: "Binary Trees in Data Structures", duration: "Tree Traversal | DSA Placement Series|1:14:15", topicId: "trees" },
  { id: "apna-tree2", videoId: "7tzHzN_Ehus", title: "Height of a Binary Tree", duration: "Count of Nodes in a Binary Tree|23:09", topicId: "trees" },
  { id: "apna-tree3", videoId: "tumW7jsjv68", title: "Identical Tree (same tree)", duration: "Subtree of another Tree|23:28", topicId: "trees" },
  { id: "apna-tree4", videoId: "aPyDPImR5UM", title: "Diameter of Binary Tree", duration: "19:29", topicId: "trees" },
  { id: "apna-tree5", videoId: "FGr-syrhvOA", title: "Top View of a Binary Tree", duration: "DSA Series : L.87|19:39", topicId: "trees" },
  { id: "apna-tree6", videoId: "ze4JO_ODl3w", title: "Kth Level of a Binary Tree", duration: "DSA Series : L.88|7:59", topicId: "trees" },
  { id: "apna-tree7", videoId: "oX5D0uKOMck", title: "Lowest Common Ancestor in Binary Tree", duration: "DSA Series : L.89|18:20", topicId: "trees" },
  { id: "apna-tree8", videoId: "33b1M980cCA", title: "Build Tree from Preorder & Inorder", duration: "DSA Series : L.90|20:59", topicId: "trees" },
  { id: "apna-tree9", videoId: "TY6kEejJEM0", title: "Transform to Sum Tree", duration: "DSA Series : L.91|8:41", topicId: "trees" },
  { id: "apna-tree10", videoId: "AWJD__CfM6A", title: "Binary Tree Paths", duration: "DSA Series : L.92|10:01", topicId: "trees" },
  { id: "apna-tree11", videoId: "rhz-csskg_A", title: "Maximum Width of Binary Tree", duration: "DSA Series : L.93|21:09", topicId: "trees" },
  { id: "apna-tree12", videoId: "PUfADhkq1LI", title: "Morris Inorder Traversal", duration: "DSA Series : L.94|17:52", topicId: "trees" },
  { id: "apna-tree13", videoId: "dU2Z5HWSGM0", title: "Flatten Binary Tree to Linked List", duration: "DSA Series : L.95|15:43", topicId: "trees" },
  { id: "apna-tree14", videoId: "RuF7dPfj27Q", title: "Binary Search Trees (BSTs)", duration: "DSA Series : L.96|43:16", topicId: "trees" },
  { id: "apna-tree15", videoId: "0s6sCjs_4g0", title: "Sorted Array to Balanced BST", duration: "DSA Series : L.97|8:44", topicId: "trees" },
  { id: "apna-tree16", videoId: "dSBcCynP1nA", title: "Validate Binary Search Tree", duration: "DSA Series : L.98|12:41", topicId: "trees" },
  { id: "apna-tree17", videoId: "WZmjRXF_Zi4", title: "Min Distance between BST Nodes", duration: "DSA Series : L.99|14:16", topicId: "trees" },
  { id: "apna-tree18", videoId: "Kq4BbvIhj44", title: "Kth Smallest in BST", duration: "DSA Series : L.100|12:42", topicId: "trees" },
  { id: "apna-tree19", videoId: "ORxkZ12FrU4", title: "Lowest Common Ancestor in BST", duration: "DSA Series : L.101|12:29", topicId: "trees" },
  { id: "apna-tree20", videoId: "-n5Ur1wE5Jc", title: "Construct BST from Preorder", duration: "DSA Series : L.102|19:10", topicId: "trees" },
  { id: "apna-tree21", videoId: "AiKZjCuy2k4", title: "Merge Two Binary Search Trees", duration: "DSA Series : L.103|16:39", topicId: "trees" },
  { id: "apna-tree22", videoId: "0KGzfij_SCk", title: "Recover BST", duration: "DSA Series : L.104|24:03", topicId: "trees" },
  { id: "apna-tree23", videoId: "Pr-HFxp7npk", title: "Largest BST in Binary Tree", duration: "DSA Series : L.105|24:56", topicId: "trees" },
  { id: "apna-tree24", videoId: "a8VKpW1DsD8", title: "Populate Next Right Pointers in Each Node", duration: "DSA Series : L.106|11:12", topicId: "trees" },
  { id: "apna-tree25", videoId: "dS1bKglre3A", title: "BST Iterator", duration: "DSA Series : L.107|17:16", topicId: "trees" },
  { id: "apna-tree26", videoId: "IHNkql1tAnk", title: "Inorder Predecessor & Successor in BST", duration: "DSA Series : L.108|19:50", topicId: "trees" },

  // ── graphs ──
  { id: "apna-graph1", videoId: "RpgyCJBbl5E", title: "Introduction to Graphs", duration: "Data Structure & Algorithms|26:08", topicId: "graphs" },
  { id: "apna-graph2", videoId: "scQITTLgFJo", title: "BFS Traversal in Graphs", duration: "Data Structure & Algorithms|18:31", topicId: "graphs" },
  { id: "apna-graph3", videoId: "3czYbhac160", title: "DFS Traversal in Graphs", duration: "Data Structure & Algorithms|14:03", topicId: "graphs" },
  { id: "apna-graph4", videoId: "OZClCpPQDR4", title: "Detect a Cycle in Undirected Graph using DFS", duration: "Data Structure & Algorithms|19:45", topicId: "graphs" },
  { id: "apna-graph5", videoId: "MIjOkApZ39g", title: "Detect a Cycle in Undirected Graph using BFS", duration: "Data Structure & Algorithms|18:23", topicId: "graphs" },
  { id: "apna-graph6", videoId: "AME6baBpswY", title: "Number of Islands", duration: "Connected Components in Matrix | Leetcode 200|17:05", topicId: "graphs" },
  { id: "apna-graph7", videoId: "RmXo5SWkhCs", title: "Rotting Oranges", duration: "Multi-source BFS | Leetcode 994|26:22", topicId: "graphs" },
  { id: "apna-graph8", videoId: "AcppN5XFt24", title: "Detect a Cycle in Directed Graph using DFS", duration: "Lecture 116|15:59", topicId: "graphs" },
  { id: "apna-graph9", videoId: "0WIINUY12Yg", title: "Topological Sorting in Graph", duration: "using DFS | Lecture 117|15:58", topicId: "graphs" },
  { id: "apna-graph10", videoId: "37cJ38HadM4", title: "Course Schedule Problem", duration: "using Graph & Topological Sort|17:54", topicId: "graphs" },
  { id: "apna-graph11", videoId: "rZsgWxodGmM", title: "Course Schedule II Problem", duration: "using Graph & Topological Sort|19:33", topicId: "graphs" },
  { id: "apna-graph12", videoId: "JI_e2RzARbM", title: "Flood Fill Algorithm", duration: "Graph Problem|15:10", topicId: "graphs" },
  { id: "apna-graph13", videoId: "BnQpaTZg6Sc", title: "Topological Sorting using Kahn's Algorithm", duration: "Graph  - DSA Lecture 121|18:47", topicId: "graphs" },
  { id: "apna-graph14", videoId: "8gYBHjtjWBI", title: "Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method", duration: "35:20", topicId: "graphs" },
  { id: "apna-graph15", videoId: "YlmU4gBgePA", title: "DSA Series Quick Update - 125 lectures", duration: "New DSA Sheet | DP, Heaps, Tries etc|6:24", topicId: "graphs" },
  { id: "apna-graph16", videoId: "Sflh1z6cIMk", title: "Prim's Algorithm - Minimum Spanning Tree in Graph", duration: "26:07", topicId: "graphs" },
  { id: "apna-graph17", videoId: "nnrjWxWMo3E", title: "Disjoint Set Union", duration: "With Rank/Size & Path Compression | Union Find|34:04", topicId: "graphs" },
  { id: "apna-graph18", videoId: "inoM6jwj1CA", title: "Kruskal's Algorithm - Minimum Spanning Tree in Graph", duration: "29:07", topicId: "graphs" },
  { id: "apna-graph19", videoId: "J1yCPIP-K8s", title: "Number of Provinces", duration: "Graph Problem|12:35", topicId: "graphs" },
  { id: "apna-graph20", videoId: "mEx8JJQJUs8", title: "Min Cost to Connect All Points", duration: "Graph Problem|21:16", topicId: "graphs" },
  { id: "apna-graph21", videoId: "CLmykzpeCCs", title: "Cheapest Flights Within K Stops", duration: "Graph Problem|30:29", topicId: "graphs" },
  { id: "apna-graph22", videoId: "6h1SucBNxgc", title: "Bridge in Graph using Tarjan's Algorithm", duration: "Critical Connections|32:36", topicId: "graphs" },
  { id: "apna-graph23", videoId: "cn7pov3BEmg", title: "Articulation Point in Graph using Tarjan's Algorithm", duration: "Critical Points|36:53", topicId: "graphs" },
  { id: "apna-graph24", videoId: "lqY8TE0P1S8", title: "Strongly Connected Components - Kosaraju's Algorithm", duration: "Graphs|26:26", topicId: "graphs" },
  { id: "apna-graph25", videoId: "iZBXd-vjHUA", title: "Floyd Warshall Algorithm", duration: "All Pairs Shortest Path in Graph|27:36", topicId: "graphs" },
];

/** Lectures grouped by topic, in the same order as APNA_TOPICS */
export const APNA_LECTURES_BY_TOPIC: Record<string, ApnaLecture[]> = APNA_TOPICS.reduce(
  (acc, t) => {
    acc[t.id] = APNA_LECTURES.filter((l) => l.topicId === t.id);
    return acc;
  },
  {} as Record<string, ApnaLecture[]>,
);
