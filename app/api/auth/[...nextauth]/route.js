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


    async session({session}){

    },

    async signIn({profile}){
        try{

        }
        catch(error){

        }

    }

})



export { handler as GET, handler as POST}