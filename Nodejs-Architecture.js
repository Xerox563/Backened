// agar Tumhare app pr bahaut jaada users aayae aur jo tmnae saara code likha vo saara blocking operations
// kae through likha tha toh fir toh server krnae lg jayega after limited number of users as there are limited threads .
// so Its not a good thing to write blocking operations Code.(Try always to have non blockign code)

const fs = require("fs");
const os = require("os");

// Sync .. Blocking Code
// fs.writeFileSync("./test.txt", "Hello World !!");

//  Async .. Non Blocking Code
// fs.writeFile("./test.txt", "Hellow World !!", (err) => {});

// * Scenerio 1 (Blocking Result )
console.log("1");
// Blocking
const res = fs.readFileSync("test.txt", "utf-8"); // thread blocked Here
console.log(res); // Thread Freed Here
console.log("2");

// In Above Execution was from top to bottom

// * Scenerio 2 (Non Blocking Result -> Gives result in aynchronous manner)
console.log("1");
// Blocking
fs.readFile("test.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error : ", err);
  } else {
    console.log("Result : ", res); //Thread Freed Here
  }
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// By default : Thread size : 4 (But we can inceased to number of cores of CPU)

// IF CPU cores = 8;
// then max threads = 8;

console.log(os.cpus().length); // number of cores

/* We should Always write a code that is non blocking .. */

// * ------------------------------------------------------------------------------------------

/* :: Node.js Architecture */

/* 

* 🏗 (1) Client Requests
-> Users send requests (e.g., opening a webpage, fetching data).
-> These requests can be read/write operations (e.g., fetching user details or saving a form).

Example:
A browser requests GET /profile to fetch user details.
A mobile app sends POST /order to place an order.


* ⚙ (2) Event-Driven Non-Blocking Architecture
-> Instead of handling one request at a time, Node.js can handle multiple requests simultaneously.
-> It doesn’t wait for a request to finish before starting another.

🔹 Example (Blocking vs Non-Blocking I/O)
🚫 Blocking Code (Slow)

const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8'); // Waits until file is read
console.log(data);
console.log("This prints after file is read.");


✅ Non-Blocking Code (Fast)

const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
  console.log(data); // Runs when file is ready
});
console.log("This prints immediately!"); // Runs without waiting


-> Blocking (Synchronous) → Reads the file first, then moves to the next line.
-> Non-blocking (Asynchronous) → Moves to the next task without waiting.


* 🚀 (3) The Event Loop
The heart of Node.js.
-> Listens for events (requests) and assigns them for execution.
-> Ensures non-blocking behavior by using callbacks & promises.

How It Works?
1️⃣ A client sends a request → Node.js receives it.
2️⃣ The Event Loop checks if the request is CPU-intensive:

-> If not CPU-intensive (e.g., reading a file, fetching data) → Handles it immediately.
-> If CPU-intensive (e.g., image processing, large calculations) → Sends it to Worker Threads.
3️⃣ After processing, the response is sent back.

* 🏭 (4) Worker Threads (For Heavy Tasks)
-> Node.js is single-threaded but can use Worker Threads for CPU-intensive tasks.
-> Ideal for image processing, AI models, or heavy calculations.

🔹 Example: Using Worker Threads
const { Worker } = require('worker_threads');
const worker = new Worker('./workerTask.js'); // Runs heavy task in a separate thread
worker.on('message', (msg) => console.log("Worker response:", msg));


* 🗄 (5) Asynchronous I/O Operations
-> I/O (Input/Output) operations (like DB queries, file reads) don’t block the main thread.
-> Uses callbacks, promises, or async/await.

🔹 Example: Fetching Data Asynchronously
const fetch = require('node-fetch');

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
getData();

-> Uses async/await to handle the request without blocking other operations.


6. Full Flow of Node.js Architecture
🔹 Example: Handling a Web Request
1️⃣ A user requests GET /profile
2️⃣ The Event Loop processes the request
3️⃣ If it requires database access, it delegates to Async I/O
4️⃣ If it's CPU-intensive, it assigns a Worker Thread
5️⃣ Once processed, the response is sent back to the user
*/

/*
 *                       🔹 Key Points
✔ Node.js uses an event-driven model to handle multiple requests efficiently
✔ The Event Loop ensures non-blocking behavior, making apps fast
✔ Worker Threads handle heavy CPU tasks in the background
✔ Asynchronous I/O allows handling multiple operations at once 

*/
