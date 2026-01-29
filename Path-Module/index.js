const path = require("path");

console.log("File Name: ", path.basename(__filename));

console.log("File Extention: ", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");

console.log("Joined Path: ", joinPath);

const resolvedPath = path.resolve("Path-Module", "Node Basics");
console.log(resolvedPath);

const normalisePath = path.normalize("/User/documents/../projects");

console.log(normalisePath);
