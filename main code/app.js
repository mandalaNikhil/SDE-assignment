const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://Nikhil:laxmi123456789@cluster0.ay8cntb.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "accounting_department";


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
     database.collection.createIndex( { "createdAt": 1 }, { Duration: 3600 } )

});
    });
