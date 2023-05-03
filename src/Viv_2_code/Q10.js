/*
Q10 Implement a Nodejs application to create a writable stream with a new sample.txt file and perform the following tasks.
    a) Find the prime numbers up to 100 and write the values to the sample.txt file with the writable stream
    b) Display the message "Task Completed "at the end in the console window.
*/

const fs = require('fs');

// Create a writable stream with the new sample.txt file
const writeStream = fs.createWriteStream('sample2.txt');

// Find prime numbers up to 100
function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

for(let i = 1; i <= 200; i++) {
  if(isPrime(i)) {
    // Write prime number to the writable stream
    writeStream.write(i + '\n');
  }
}

// End the writable stream and display message in the console
writeStream.end(() => console.log('Task Completed'));
