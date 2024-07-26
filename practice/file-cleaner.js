// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function readFile(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    console.log("before: " + data);
    data = data.replace(/\s+/g,' ').trim();
    console.log(data);
  });
}
readFile("file-cleaner.txt");