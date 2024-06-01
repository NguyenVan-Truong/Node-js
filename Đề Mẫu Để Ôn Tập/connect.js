import mongoose from "mongoose";
export default async function connectBD(uri){
    try {
        await mongoose.connect(uri);
        console.log("Thành Công");
    } catch (error) {
        console.log(error)
    }
}