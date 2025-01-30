// Node JS  -> Runtime enviornment for Javascript.
/*
 * We run js code inside the browser due to js Engine inside browser
 * Any price of code that we write when we executes it gets executed due to the js engine of the browser.
 * Problem was Js engine was present inside broswer means we can only execute the code of js inside the browsers .
 * Chrome -> V8(Most Popular) ,firefox -> spydermonkey ,saffari ->> apple js Engine
 * Ryan Dahl - embedded (extracted V8 + C++ Code (native language)) -> Nodejs (Allows the js to be executed outside the browser )
 * Js can talk to native machine (due to c++) , now uu can do file handling , can run webservers in js Language.
 * Node.js is a JavaScript runtime that allows you to run JavaScript code outside the browser. Normally, JavaScript runs in the browser (like Chrome, Firefox), but Node.js lets you run it on a server.
 */

// Extra
/*
 *Key Features of Node.js
✅ Asynchronous & Non-blocking: Handles multiple requests at once, so it’s super fast.
✅ Single-threaded: Uses a single process to manage many tasks at once.
✅ Uses JavaScript: If you know JavaScript, you can write both frontend and backend code!
✅ Event-Driven: Reacts to things happening (e.g., when a user logs in, Node.js processes it immediately).
✅ Built-in Modules: Includes tools for handling files, HTTP requests, databases, and more. 
 */

// version check -> npm -v (npm --version) , node --version (node-v)

// --------------------------------------------------------------------------------------------------------------------------

/*            Why NodeJs is Fast ??
* ✅ Single-threaded, event-driven model → Handles multiple requests efficiently
* ✅ Non-blocking I/O → Doesn't wait for slow tasks
* ✅ Uses Worker Threads for heavy tasks → Keeps the main thread free
* ✅ Streams data instead of loading everything at once


 */
