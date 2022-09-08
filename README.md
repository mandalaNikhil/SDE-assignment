# SDE-assignment
a REST API in Nodejs with MongoDb as database for creating  tasks with a duration (in minutes).

Without a doubt, (Application Programming Interfaces) or APIs play a very important role in communication and data exchange between servers and services.


From computers to smartphones and Internet of Things (IoT), applications talk and exchange info via APIs. Almost every day we use or interact with an API service, and many sites use a custom API to scale up their website. As such, learning how to develop a custom API adds lots of value to your developer profile.

Motivated by the importance of APIs and the popularity of JavaScript (JS), I'd like to show you how to develop a REST API using Node.JS and MongoDB as database.

Overview:-
we walk you through seven steps for developing a RESTFul API using popular JavaScript frameworks such as Node.JS and Express.JS. In doing so, we learn how to integrate our API with the MongoDB database.

Rest API:
REST stands for Representational State Transfer. 
When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
For example, when a developer calls OpenWeather API to fetch weather for a specific city (the resource), the API will return the state of that city, including the temperature, humidity, wind speed, current forecast, extended forecast, and more. The representation of the state can be in a JSON format, and for most web APIs, this is indeed the case. Other possible data formats include XML or HTML. What does the server does when you call it depends on two things that you need to provide to the server:
1. An identifier for the resource. – This is the URL for the resource, also known as the endpoint. In fact, URL stands for Uniform Resource Locator.
2. The operation you want the server to perform on that resource, in the form of an HTTP method. 
3. The common  HTTP methods are GET, POST, PUT, and DELETE.

First Task:
   CREATING TODO RECORD WITH A SPECIFIED SCHEME LIKE : - 1)Task name
                                                         2)Task description
                                                         3)Creator
                                                         4)Duration
                                                         5)createdAt
                                                         
 ```
 {"_id":{"$oid":"631a0c67f4dff8fd0a35fa17"},
 "Taskname":"Interview Assignment",
 "Taskdescription":"Creating API and executing CRUD operations",
 "Creator":"Nikhil",
 "Duration":{"$numberInt":"3600"},
 "CreatedAt":{"$date":{"$numberLong":"1662651493393"}}}
 ```
 The code behind it:
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
        database.collection("todo").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   });
   ```
   
   
 
