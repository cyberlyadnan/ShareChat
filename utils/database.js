// import mongoose from "mongoose";


// let isConnected = false;


// export const connectToDB = async () => {
//     mongoose.set("strictQuery", true)

//     if(isConnected){
//         console.log("Database is already connected")
//         return
//     }


//     try{
//         await mongoose.connect(process.env.MONGODB_URI,{
//             dbName:"share_prompt",
//             useNewUrlParser:true,
//             useUnifiedTopology:true,

//         })

//         isConnected = true
//         console.log("Database Successfully Connected")
//     }catch(error){

//     }
// }


// utils/database.js

// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set("strictQuery", true);

//     if (isConnected) {
//         console.log("Database is already connected");
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: "share_prompt",
//             // Removed deprecated options
//         });

//         isConnected = true;
//         console.log("Database Successfully Connected");
//     } catch (error) {
//         console.error("Database connection error:", error);
//     }
// };



import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("Database is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("Database Successfully Connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

