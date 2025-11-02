# 🕒 Merge Time Ranges

A small Node.js module that merges overlapping or close time ranges based on a given threshold.  
This project was created as part of the **SDE Assignment - Nov 2025**.

Interview Challenge : https://www.saralweb.com/careers/merge-time-ranges#NodeJS-Module-Signature
---

## 🚀 What It Does

You give an array of time ranges like this:
```js
[
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
]
Each range is [start, end) (start is inclusive, end is exclusive).
If two ranges overlap or are very close (gap ≤ threshold), they’ll be merged into one.

🧩 Example
Input

js
Copy code
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;
Output

js
Copy code
[
  [1000, 2000],
  [2500, 4100],
  [8000, 9500]
]
🧠 How It Works
Sort all ranges by their start time.

Compare each range with the last merged one.

If the next range starts before (or within threshold of) the previous range’s end → merge them.

Otherwise, start a new range.

Simple, efficient, and clean ✅

🛠️ Usage
1️⃣ Install Node.js
Make sure you have Node.js installed.

2️⃣ Run the Project
Clone or download this folder, then open the terminal inside it and run:

bash
Copy code
node test.js
You’ll see merged time ranges printed in the console.

📦 Project Structure
perl
Copy code
merge-time-ranges/
│
├── my-module.js     # Core function logic
├── test.js          # Test examples
└── package.json     # Project info
✨ Author
Ratnesh Jatav
Web & Software Developer
📧 ratneshjatav637@gmail.com
🌐 GitHub | LinkedIn
  
