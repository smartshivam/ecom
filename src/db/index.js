import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        let databaseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log("databse connected successfully");
        
    } catch (error) {
        console.log("error occured in databse connection please check databse connection",error);
        throw error
        
    }

}

export default connectDB
