/*
Implement a Nodejs application to connect with the MongoDB for performing the below operations
    a) Create a database and add Student collection with the fields- Sid, Name, Subject, Branch, and Mark 
    b) Add multiple documents with student data
    c) Sort (in ascending order) the student details with marks and display them in the console window.

*/

//npm install mongoose



// 'mongodb+srv://vivanshu:Vishu1234@cluster0.jugdydo.mongodb.net/?retryWrites=true&w=majority/bank'


const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/Vivanshu.VivanshuData';

// Database and collection names
const dbName = 'test';
const collectionName = 'students';

// Sample student data
const students = [
  { Sid: 1, Name: 'John', Subject: 'Math', Branch: 'Science', Mark: 85 },
  { Sid: 2, Name: 'Mary', Subject: 'Science', Branch: 'Arts', Mark: 92 },
  { Sid: 3, Name: 'David', Subject: 'English', Branch: 'Commerce', Mark: 78 },
  { Sid: 4, Name: 'Susan', Subject: 'Social Studies', Branch: 'Science', Mark: 91 },
  { Sid: 5, Name: 'Tom', Subject: 'History', Branch: 'Arts', Mark: 79 }
];

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get the database object
    const db = client.db(dbName);

    // Get the students collection
    const studentsCollection = db.collection(collectionName);

    // Create the students collection and insert the sample data
    await studentsCollection.insertMany(students);

    // Sort the students by mark in ascending order and display them in the console
    const sortedStudents = await studentsCollection.find().sort({ Mark: 1 }).toArray();
    console.log(sortedStudents);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
}

main();

