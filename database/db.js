import mongoose from "mongoose"

const Connection = ()=>{
    const DB_URI = 'mongodb://127.0.0.1:27017/myapp';
    try {
        mongoose.connect(DB_URI,  {useNewUrlParser:true})
        console.log("Db is connected")
    } catch (error) {
        console.log("Error while connecting the db", error.message)
    }
}

export default Connection;