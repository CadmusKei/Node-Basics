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
  } catch (error) {
    console.log("File could not be written! ", error);
  }
}

createFolder();
createFile("ILoveRrin");
