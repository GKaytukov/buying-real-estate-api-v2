import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb"; // Importing Object - unique identifiers for all the docs in db

export async function addLogin(req, res) {
    
    const newContactUsMessage = req.body
    const db = dbConnect()
    await db.collection("login").insertOne
        (newContactUsMessage)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: " Login Message Added." })
} // get all 
