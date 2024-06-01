import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
})
export default new mongoose.model("Brand" , brandSchema)