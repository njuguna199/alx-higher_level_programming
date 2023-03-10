#!/usr/bin/node

const request = require('request');

// Check if the API URL was provided as an argument
if (process.argv.length !== 3) {
  console.error('Error: Please provide the API URL as an argument.');
  process.exit(1);
}

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Make a request to the API to get the tasks data
request(apiUrl, { json: true }, (err, res, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Create an object to store the number of completed tasks by user ID
  const completedTasksByUser = {};

  // Loop through the tasks data and count the number of completed tasks for each user
  data.forEach(task => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });

  // Print the completed tasks by user ID to the console
  console.log(completedTasksByUser);
});
