const lodash = require("lodash");

const names = ["kei", "ella", "alex", "kyle"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
