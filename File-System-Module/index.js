const { read } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

async function createFolder() {
  try {
    await fs.mkdir(dataFolder, { recursive: true });
    console.log("Folder Created!");
  } catch (error) {
    console.log(error);
  }
}

async function createFile(name) {
  const filename = path.join(dataFolder, `${name}.txt`);
  try {
    await fs.writeFile(filename, "I love Erin!");
    console.log("File Created!");
  } catch (error) {
    console.log("File could not be written! ", error);
  }
}

async function readFile(name) {
  try {
    const filename = path.join(dataFolder, `${name}.txt`);
    const contents = await fs.readFile(filename, "utf8");
    console.log("File contents: ", contents);
  } catch (error) {
    console.log("Could not read file! Error: ", error);
  }
}

async function appendLine(name, content) {
  try {
    const fileName = path.join(dataFolder, `${name}.txt`);
    await fs.appendFile(fileName, "\n" + content);
    console.log("Success! We have appended the content!");
  } catch (error) {
    console.log("Could not append! Error: ", error);
  }
}

async function readFileJustWritten() {
  try {
    await createFolder();
    await createFile("ILoveErin");
    await appendLine("ILoveErin", "Like a lot!");
    await readFile("ILoveErin");
  } catch (error) {
    console.log("Could not read the created file! Error: ", error);
  }
}

readFileJustWritten();
