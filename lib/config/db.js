import  mongoose from "mongoose"


export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://samudra:babai19@cluster0.y2nibhs.mongodb.net/blog-app')
    console.log("DB Connected");
}