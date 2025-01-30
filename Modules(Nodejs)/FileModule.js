const fs = require("fs"); // ITs searched inside the built in modules or downloaded modules .

/*   Write File */

// Sync...
// fs.writeFileSync("./test.txt", "Hello World !!");

// Asnc...
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

/*   Read File */

// Sync
// const r = fs.readFileSync("./test.txt", "utf-8");
// console.log(r);

// Async
fs.readFile("./test.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(res);
  }
});

/* Append (Create log directory)*/

// sync
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// Copy the File
// fs.cpSync("./test.txt", "./copy.txt");

// Delete the file
// fs.unlinkSync("./copy.txt");

// Statistics (Properties)
// const op = fs.statSync("./test.txt").isFile();
// console.log(op);

// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a/b", { recursive: true });

/*
 * Writing: fs.writeFileSync() – Creates/Overwrites a file with content.
 * Reading: fs.readFileSync() – Reads content from a file.
 * Appending: fs.appendFileSync() – Adds content to an existing file.
 * Deleting: fs.unlinkSync() – Deletes a file.
 * Checking Info: fs.statSync() – Gets details about a file (size, timestamp, etc.).
 */
/*
 * Use fs.writeFileSync() to create or overwrite a file with content.
 * Use fs.readFileSync() to read and see what’s inside the file.
 * If you want to add more content to the file, use fs.appendFileSync().
 * If you no longer need the file, you can delete it with fs.unlinkSync().
 * You can check a file's details (like size or creation time) using fs.statSync().
 */
