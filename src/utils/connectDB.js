import mongoose from "mongoose";


async function connectDB(){
    if(mongoose.connections[0].readyState)return;
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB")
}

export default connectDB;