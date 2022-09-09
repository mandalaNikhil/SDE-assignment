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

### Installation

**`npm`** comes bundled with [**`node`**](https://nodejs.org/), & most third-party distributions, by default. Officially supported downloads/distributions can be found at: [nodejs.org/en/download](https://nodejs.org/en/download)

#### Direct Download

You can download & install **`npm`** directly from [**npmjs**.com](https://npmjs.com/) using our custom `install.sh` script:

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

#### Node Version Managers

If you're looking to manage multiple versions of **`node`** &/or **`npm`**, consider using a "Node Version Manager" such as:

* [**`nvm`**](https://github.com/nvm-sh/nvm)
* [**`nvs`**](https://github.com/jasongin/nvs)
* [**`nave`**](https://github.com/isaacs/nave)
* [**`n`**](https://github.com/tj/n)
* [**`volta`**](https://github.com/volta-cli/volta)
* [**`nodenv`**](https://github.com/nodenv/nodenv)
* [**`asdf-nodejs`**](https://github.com/asdf-vm/asdf-nodejs)
* [**`nvm-windows`**](https://github.com/coreybutler/nvm-windows)
* [**`fnm`**](https://github.com/Schniz/fnm)

### Usage

```bash
npm <command>
```

### Links & Resources

* [**Documentation**](https://docs.npmjs.com/) - Official docs & how-tos for all things **npm**
    * Note: you can also search docs locally with `npm help-search <query>`
* [**Bug Tracker**](https://github.com/npm/cli/issues) - Search or submit bugs against the CLI
* [**Roadmap**](https://github.com/orgs/github/projects/4247/views/1?filterQuery=npm) - Track & follow along with our public roadmap
* [**Feedback**](https://github.com/npm/feedback) - Contribute ideas & discussion around the npm registry, website & CLI
* [**RFCs**](https://github.com/npm/rfcs) - Contribute ideas & specifications for the API/design of the npm CLI
* [**Service Status**](https://status.npmjs.org/) - Monitor the current status & see incident reports for the website & registry
* [**Project Status**](https://npm.github.io/statusboard/) - See the health of all our maintained OSS projects in one view
* [**Events Calendar**](https://calendar.google.com/calendar/u/0/embed?src=npmjs.com_oonluqt8oftrt0vmgrfbg6q6go@group.calendar.google.com) - Keep track of our Open RFC calls, releases, meetups, conferences & more
* [**Support**](https://www.npmjs.com/support) - Experiencing problems with the **npm** [website](https://npmjs.com) or [registry](https://registry.npmjs.org)? File a ticket [here](https://www.npmjs.com/support)

### Acknowledgments

* `npm` is configured to use the **npm Public Registry** at [https://registry.npmjs.org](https://registry.npmjs.org) by default; Usage of this registry is subject to **Terms of Use** available at [https://npmjs.com/policies/terms](https://npmjs.com/policies/terms)
* You can configure `npm` to use any other compatible registry you prefer. You can read more about configuring third-party registries [here](https://docs.npmjs.com/cli/v7/using-npm/registry)

### FAQ on Branding

#### Is it "npm" or "NPM" or "Npm"?

**`npm`** should never be capitalized unless it is being displayed in a location that is customarily all-capitals (ex. titles on `man` pages).

#### Is "npm" an acronym for "Node Package Manager"?

Contrary to popular belief, **`npm`** **is not** in fact an acronym for "Node Package Manager"; It is a recursive bacronymic abbreviation for **"npm is not an acronym"** (if the project was named "ninaa", then it would be an acronym). The precursor to **`npm`** was actually a bash utility named **"pm"**, which was the shortform name of **"pkgmakeinst"** - a bash function that installed various things on various platforms. If **`npm`** were to ever have been considered an acronym, it would be as "node pm" or, potentially "new pm".


Why use body-parser?
Let’s say you are sending an HTML form data to Node.js server i.e. you made a request to the server. HTTP sends your form data in bits and pieces which are intended to get assembled as they reach their destination. To extract these bits and pieces of data and assemble it so it is in a format that can be useful, we use a body-parser middleware


Run the Application
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


5. Establish Connection with MongoDB
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
 Lastly :
  I learned how to develop a custom API and connect it with MongoDB to fetch and manipulate the data. From here, you can take different steps. For instance, you can expand this project by adding more features like data validation to it. You can also improve the API security and salability by following Node.JS best practices
