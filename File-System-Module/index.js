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

createFolder();
