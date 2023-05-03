/*A)Perform the following in MongoDB
(i) Create database and Create collection
(ii) Insert documents
(iii) Update documents 
(iv) Delete documents
*/
// ..................Run these code in CMD/mongos

// Sure, here are the MongoDB commands to perform the tasks you've requested:

// (i) To create a database and a collection, you can use the following commands:
use myDatabase   //create a new database or switch to an existing one
db.createCollection("myCollection")   //create a new collection in the database

// (ii) To insert documents into the collection, you can use the insertOne() or insertMany() methods:
db.myCollection.insertOne({name: "John", age: 30, city: "New York"})
db.myCollection.insertMany([
   {name: "Sarah", age: 25, city: "London"},
   {name: "Mike", age: 35, city: "Los Angeles"}
])

// (iii) To update documents, you can use the updateOne() or updateMany() methods:
db.myCollection.updateOne({name: "John"}, {$set: {age: 32}})
db.myCollection.updateMany({city: "New York"}, {$set: {city: "Chicago"}})


// (iv) To delete documents, you can use the deleteOne() or deleteMany() methods:
db.myCollection.deleteOne({name: "Sarah"})
db.myCollection.deleteMany({city: "Chicago"})