import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
})
export default new mongoose.model("Auth" , authSchema)