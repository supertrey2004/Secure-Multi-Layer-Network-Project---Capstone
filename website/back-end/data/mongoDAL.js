const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb://dev:Passw0rd@SERVER_IP:27017/DBNAME";
const dbName = ""

let dal = {

    getAllDocuments: async function(collection) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.find().toArray(); 

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    getDocumentByUser: async function(collection, username) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.find({username: username}).toArray();

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    getDocumentByID: async function(collection, id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.find({_id:new ObjectId(id)}).toArray();

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    getDocumentsByTable: async function(collection, table) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.find(table).toArray();

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    addDocument: async function(collection, newDoc) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.insertOne(newDoc);

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    deleteDocument: async function(collection, id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.deleteOne({_id:new ObjectId(id)});

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    },

    updateDocument: async function(collection, id, updatedDoc) {
        const client = new MongoClient(uri);
        try {
            await client.connect();

            // Your Code Here
            let db = await client.db(dbName);
            let coll = db.collection(collection);

            let results = await coll.updateOne({_id:new ObjectId(id)}, {$set: updatedDoc}, {});

            //console.log("Results:", results);
            return results;
        } finally {
            await client.close();
        }
    }
}

exports.dal = dal;