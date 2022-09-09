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



### Acknowledgments

* `npm` is configured to use the **npm Public Registry** at [https://registry.npmjs.org](https://registry.npmjs.org) by default; Usage of this registry is subject to **Terms of Use** available at [https://npmjs.com/policies/terms](https://npmjs.com/policies/terms)
* You can configure `npm` to use any other compatible registry you prefer. You can read more about configuring third-party registries [here](https://docs.npmjs.com/cli/v7/using-npm/registry)

### OVERVIEW:-

REST stands for REpresentational State Transfer. When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource. For example, when a developer calls OpenWeather API to fetch weather for a specific city (the resource), the API will return the state of that city, including the temperature, humidity, wind speed, current forecast, extended forecast, and more. The representation of the state can be in a JSON format, and for most web APIs, this is indeed the case. Other possible data formats include XML or HTML. What does the server does when you call it depends on two things that you need to provide to the server:
1. An identifier for the resource. – This is the URL for the resource, also known as the endpoint. In fact, URL stands for Uniform Resource Locator.
2. The operation you want the server to perform on that resource, in the form of an HTTP method. The common HTTP methods are GET, POST, PUT, and DELETE.
 ### Requirements::-
created a file called app.js which will be the main entry point to the application, and we installed a few dependencies that are essential to start our application.
These dependencies are:
1. Express: This is a Node.js framework.
2. MongoDB: This is an official module provided by the MongoDB team to help our Node.js application communicate with MongoDB.
3. body-parser: This package will allow us to handle request bodies with Express.
4. Heroku: For deploying the code from the github.






### Why use body-parser?
Let’s say you are sending an HTML form data to Node.js server i.e. you made a request to the server. HTTP sends your form data in bits and pieces which are intended to get assembled as they reach their destination. To extract these bits and pieces of data and assemble it so it is in a format that can be useful, we use a body-parser middleware


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
/*
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
 ### Lastly :
  I learned how to develop a custom API and connect it with MongoDB to fetch and manipulate the data. From here, you can take different steps. For instance, you can expand this project by adding more features like data validation to it. You can also improve the API security and salability by following Node.JS best practices
