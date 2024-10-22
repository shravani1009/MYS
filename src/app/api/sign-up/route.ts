import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/model/User";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/app/helpers/sendVerificationEmails";


export async function POST(request : Request){
    await dbConnect()

    try {
        const { username , email , password} = await request.json()
        
    } catch (error) {
        console.error("error registering user",error);
        return Response.json(
            {
                success : false,
                message : "error registering user"
            },
            {
                status : 500
            }
        )
        
    }
}