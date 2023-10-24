
const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://Qamar:prince8922@cluster0.fugo3ll.mongodb.net/")
    .then(() => console.log("success"))
    .catch((err) => console.log('error occured',err));

    
module.exports = connect