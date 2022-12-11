import functions from "firebase-functions";
import express from "express";
import cors from "cors"; 
import { addNewUser, getAllUsers, getOneUser, updateUser, deleteUser } from "./src/users.js";
import { addContactUsMessage } from "./src/contact.js";
import { addLogin } from "./src/login.js";
import { addApplyForFunding, getFundingForms} from "./src/applyforfunding.js"; 
import { addSignUp } from "./src/signup.js";

const PORT = 3030 //Application will using express as my API
const app = express()
app.use(express.json())
app.use(cors())

app.post('/users', addNewUser)
app.post('/signup', addSignUp)
app.post('/login', addLogin)
app.post('/contactus', addContactUsMessage)
app.post('/applyforfunding', addApplyForFunding)
// app.post('/getfunding', getFundingForms)
app.get('/users', getAllUsers)
app.patch('/users/:userId', updateUser)
app.get('/users/:userId', getOneUser)
app.delete('/users/:userId', deleteUser)

app.get('/', (req, res) => {
    res.send('Hello Gerly')
})

export const api = functions.https.onRequest(app); 