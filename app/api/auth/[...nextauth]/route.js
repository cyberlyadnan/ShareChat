import User from "@/modals/user";
import { connectToDB } from "@/utils/database";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
        })
    ],

    callbacks:{
        async session({session}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString()
    
        },
    
        async signIn({profile}){
            try{
                await connectToDB()
    
                // check if user already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
    
                //if not create user
                if(!userExists){
                    await User.create({
                        email: profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture,
                    })
                }
            }
            catch(error){
                console.log(error)
                return false
    
            }
    
        }
    }
})



export { handler as GET, handler as POST}


// pages/api/auth/[...nextauth].js

// import User from "@/modals/user";
// import { connectToDB } from "@/utils/database";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//         }),
//     ],

//     callbacks: {
//         async session({ session }) {
//             try {
//                 const sessionUser = await User.findOne({
//                     email: session.user.email,
//                 });

//                 if (sessionUser) {
//                     session.user.id = sessionUser._id.toString();
//                 }

//                 return session;
//             } catch (error) {
//                 console.error("Session callback error:", error);
//                 return session;
//             }
//         },

//         async signIn({ profile }) {
//             try {
//                 await connectToDB();

//                 // Check if user already exists
//                 const userExists = await User.findOne({
//                     email: profile.email,
//                 });

//                 // If not, create user
//                 if (!userExists) {
//                     await User.create({
//                         email: profile.email,
//                         username: profile.name.replace(" ", "").toLowerCase(),
//                         image: profile.picture,
//                     });
//                 }

//                 return true;
//             } catch (error) {
//                 console.error("SignIn callback error:", error);
//                 return false;
//             }
//         },
//     },
// });



// // Named export for HTTP methods
// export const GET = handler;
// export const POST = handler;