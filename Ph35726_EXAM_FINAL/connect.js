import mongoose from "mongoose"

export default async function connectDB(uri){
    try {
        await mongoose.connect(uri)
        console.log("thanh cong")
    } catch (error) {
        console.log(error)
    }
}