const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234567890@cluster0.dxlcbpr.mongodb.net/records')
.then(
    console.log("DB CONNECTED")
);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);
module.exports={
todo
}