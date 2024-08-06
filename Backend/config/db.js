import mongoose from "mongoose";
import colors from "colors"
const connectDB= async ()=>{
    try{ const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongo db url",conn.connection.host.bgGreen.red)
    }catch(err){
        console.log(`error in mongodb ie in config/db.js${err}`)}
    
}

export default connectDB;