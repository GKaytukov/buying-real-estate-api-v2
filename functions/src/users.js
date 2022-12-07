import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb"; // Importing Object - unique identifiers for all the docs in db

export async function addNewUser(req, res) {
    const newRealEstate = req.body
    const db = dbConnect()
    await db.collection("users").insertOne
        (newUsers)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: "New Users Added." })
} // getAll

export async function getAllUsers(req, res) {
    const db = dbConnect()
    const collection = await db.collection("applyforfunding").find().toArray()
    res.send(collection)
}

export async function updateUser(req, res) {

    const { userId } = req.params
    const db = dbConnect()

    await db.collection('users')
        .findOneAndUpdate({ _id: new ObjectId(userId) }, { $set: req.body })
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(202).send({ message: "Users updated" })
}
export async function getOneUser(req, res) {
    const db = dbConnect()
    const { userId } = req.params
    const collection = await db.collection("users")
        .find({ _id: new ObjectId(userId) }).toArray()
    res.send(collection)
}

export async function deleteUser(req, res) {
    const db = dbConnect()
    const { userId } = req.params
    await db.collection("users")
        .findOneAndDelete({ _id: new ObjectId(userId) })
    res.status(203).send('users Deleted')
}




