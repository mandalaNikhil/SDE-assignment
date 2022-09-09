# npm - a JavaScript package manager

[![npm version](https://img.shields.io/npm/v/npm.svg)](https://npm.im/npm)
[![license](https://img.shields.io/npm/l/npm.svg)](https://npm.im/npm)
[![CI - cli](https://github.com/npm/cli/actions/workflows/ci.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/ci.yml)
[![Benchmark Suite](https://github.com/npm/cli/actions/workflows/benchmark.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/benchmark.yml)

### Requirements

One of the following versions of [Node.js](https://nodejs.org/en/download/) must be installed to run **`npm`**:

* `12.x.x` >= `12.13.0`
* `14.x.x` >= `14.15.0`
* `16.0.0` or higher





### OVERVIEW:-

REST stands for REpresentational State Transfer. When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.  Other possible data formats include XML or HTML.
Two things that you need to provide to the server:
1. An identifier for the resource. – This is the URL for the resource, also known as the endpoint. 
2. The operation you want the server to perform on that resource, in the form of an HTTP method. 
    The common HTTP methods are GET, POST, PUT, and DELETE.
 ### Requirements::-
created a file called app.js which will be the main entry point to the application, and we installed a few dependencies that are essential to start our application.
These dependencies are:
1. Express: This is a Node.js framework.
2. MongoDB: This is an official module provided by the MongoDB team to help our Node.js application communicate with MongoDB.
3. body-parser: This package will allow us to handle request bodies with Express.
4. Heroku: For deploying the code from the github.


### Running  the Application
Let’s run the code for our application –
```

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
var myobj = { Taskname: "Interview Assignment", Taskdescription: "Creating API and executing CRUD operations", Creator: "Nikhil" , Duration:3600  , CreatedAt:new Date()};
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("todo");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        database
.collection("todo").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   });
   ```
   4. Test the Application
We can test the application by running the following:

node app.js


### Establish Connection with MongoDB
We will need the connection string for MongoDB. This can be found in the Atlas dashboard by choosing Clusters, then the Overview tab followed by the Connect button.
```
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Nikhil:laxmi123456789@cluster0.ay8cntb.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "accounting_department";
```

```

    app.post("/add", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    }); 
});
     app.get("/list", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
     database.collection.createIndex( { "createdAt": 1 }, { Duration: 3600 } )*/

});
    });
```
 ![image](https://user-images.githubusercontent.com/90020603/189313384-00723409-68c5-43e5-86b7-b0ff0f9f4a0c.png)

 ### Lastly :
  I learned how to develop a custom API and connect it with MongoDB to fetch and manipulate the data. From here, you can take different steps. For instance, you can expand this project by adding more features like data validation to it. You can also improve the API security and salability by following Node.JS best practices
