import mongoose from "mongoose";
import Brand from "./Brand.js";

const {Schema} = mongoose;

const carSchema = new Schema({
    name : {
        type:  String,
        required : true
    },
    ven:{
        type : String,
        required : true,
        unique : true
    },
    brand : {
        type : String,
        ref : Brand,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    dom: Date
})
export default new mongoose.model("Car" , carSchema)