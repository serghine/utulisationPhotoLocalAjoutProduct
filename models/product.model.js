const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    prix:{
        type:Number,
        required:true
    },
    urlPhoto:{
        type:String
    }
});

module.exports=mongoose.model('Product',productSchema);