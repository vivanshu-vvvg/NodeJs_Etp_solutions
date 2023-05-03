//Q2_B)Create a node js application that takes a number 'n' as a user input and calculates the sum of n natural numbers and stores the result in a file "result.txt"  which already exists. Also, "success" message gets printed on console in case of success and "Error occurred" gets displayed on console if any error occurs.

//sample.txt

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
    const number=(n * (n + 1)) / 2;
  const sum = number.toString();
  fs.writeFile('sample.txt', sum, (err) => {
    if (err) {
      console.error('Error occurred');
    } else {
      console.log('Success');
    }
  });
  rl.close();
});
