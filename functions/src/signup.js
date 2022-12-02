import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb"; // Importing Object - unique identifiers for all the docs in db

export async function addSignUp(req, res) {
    
    const newContactUsMessage = req.body
    const db = dbConnect()
    await db.collection("signup").insertOne
        (newContactUsMessage)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: " Sign Up Message Added." })
} // get all 