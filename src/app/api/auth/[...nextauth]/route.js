import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"


const authOptions ={
    session:{strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                const {email, password} = credentials;
                try {
                    await connectDB();
                }catch (error) {
                    console.log(error)
                    throw new Error("Internal Server Error!")
                }

                if (!email||!password) throw new Error("Invalid data!")

                const user = await User.findOne({email})

                if(!user) throw new Error("Please enter to your account first!")

                const isValid = await verifyPassword(password,user.password)
                if(!isValid) throw new Error("Email or Password is incorrect!")

                return {email}
            },
        }),
    ],
}

const handler= NextAuth(authOptions)
export {handler as GET,handler as POST}
export {authOptions}