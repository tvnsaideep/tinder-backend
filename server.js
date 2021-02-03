//node by default doesnt support import like statements
//so we use type: module in package.json
//we need to install some dependencies before
//npm i express mongoose
//9ml8tJViqtSig5lt
//create project in mongodb.com
//npm i cors -- adding headers to every req
//npm i axios on fronend
//axios makes http req simple
import express from 'express'
import mongoose from 'mongoose';
import Cors from 'cors';
import bodyParser from 'body-parser';

import Cards from './dbCards.js';
//App Config
const app = express();
const PORT = process.env.PORT || 3000;
const connection_url='mongodb+srv://admin:9ml8tJViqtSig5lt@cluster0.nqo65.mongodb.net/tinderdb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json())
app.use(Cors());


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//DB Config
//add 3 parameters to make the connection smooth
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})


//API Endpoints

app.get('/', (req,res)=> res.status(200).send('Hello'));

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body;
    //console.log(dbCard)

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
})

//get the info

app.get("/tinder/cards",(req,res)=>{

    Cards.find((err,data)=>{
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})
//Listener


app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});