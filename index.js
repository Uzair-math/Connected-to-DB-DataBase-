
// const Connect = require("./model/mongoose");
const express = require("express");

const mongoose = require("mongoose")
const Router = require("./routes/router")
const db = require('./model/mongoose')
const app = express();
const port = 4000;

app.use(express.json());

app.use(Router, (request, response) => {

    response.status(404).json({

        Success: false,
        Message: "Page not found! You reached a route that is not defined on this server",
    });
});

const connect = mongoose.connect("mongodb+srv://Qamar:prince8922@cluster0.fugo3ll.mongodb.net/")
    .then(() => console.log("success"))
    .catch((err) => console.log('error occured',err));
    
app.listen(port, () => {
    console.log(`port is running ${port}`);
})