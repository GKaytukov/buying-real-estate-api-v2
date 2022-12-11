import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb"; // Importing Object - unique identifiers for all the docs in db
import { getAllUsers, getOneUser } from "./users.js";

export async function addApplyForFunding(req, res) {
    const newContactUsMessage = req.body
    const db = dbConnect()
    await db.collection("applyforfunding").insertOne
        (newContactUsMessage)
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: " Apply For Funding Added." })
} 


// export async function getFundingForms(req, res) {
//     app.get('/users/:userId', getOneUser)
//     app.get('/users/:userId', getAllUsers)

    
// }