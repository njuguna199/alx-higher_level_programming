#!/usr/bin/node

const fs = require('fs');

// Check if the file path was provided as an argument
if (process.argv.length !== 3) {
  console.error('Error: Please provide the file path as an argument.');
  process.exit(1);
}

// Get the file path from the first argument
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
