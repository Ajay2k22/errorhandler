import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        mongoose.set("strictQuery", false);
        const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/expresserror");
        console.log(`connected sucessfully`)
    }
    catch (error) {
        console.log(error)
    }
}

