## CONNECTION STRING ONLY
connection string: mongodb+srv://aflores:note1234@cluster0-p4cro.mongodb.net/test?retryWrites=true&w=majority

## FULL DRIVER 
const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://aflores:<password>@cluster0-p4cro.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});