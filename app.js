const express = require("express");
const fs = require("fs");
const app = express();
const fs2 = require("fs").promises;

let files = fs.readdirSync("F:/Case Study");

console.log(files);

app.get("/", (req, res) => {
  res.send(`${ans}</div>`);
});

let ans = `<div style="background-color:grey"><h1 style="background-color:Orange; text-align:center;">File and Folder</h1>
<h1 style="text-align:center;background-color:red;color:white;font-weight:700">FIlE</h1>
<h1 style="text-align:center; background-color:black;color:white;font-weight:700"><u>FOLDER</u></h1>
`;

files.forEach(async (fileName) => {
  try {
    const stat = await fs2.lstat(`F:/Case Study/${fileName}`);
    const isFile = stat.isFile();
    console.log(isFile);
    if (!isFile) {
      ans += `<h2 style="margin:20px;"><img src= "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net
      
  C/O https://placeholder.com/" " width="30" height="40"> <u>${fileName}</u></h2>`;
      return icon;
    } else {
      ans += `<h2 style="margin:20px;"><img src= "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com
" width="30" height="40"> ${fileName}</h2>`;
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000);
