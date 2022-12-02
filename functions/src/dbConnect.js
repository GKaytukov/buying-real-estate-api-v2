import { MongoClient } from 'mongodb';
//import { uri } from "../credentials.js";
import 'dotenv/config'


export function dbConnect () {
    const client = new MongoClient(process.env.MONGO_URI);
    return client.db("mydatabase");
}

//MongoClient - Nodejs library that handles connecting to and interacting with a MongoDB database.