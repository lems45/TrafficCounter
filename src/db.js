
//const { MongoClient } = require('mongodb');

import mongodb from 'mongodb';

// Import the MongoClient class from the MongoDB driver 
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://lems4545:<Leduardo45>@trafficcounter.fwh42dg.mongodb.net/?retryWrites=true&w=majority&appName=TrafficCounter";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version 
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7) 
        await client.connect();
        // Send a ping to confirm a successful connection 
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error 
        await client.close();
    }
}

run().catch(console.dir);