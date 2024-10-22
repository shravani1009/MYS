import { resend } from "../lib/resend"; 

import VerificationEmail from "../../../emails/VertificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode : string,
) : Promise<ApiResponse>{
    try{
        return {success: true, message: 'Verification email sent succesfully'};
    } catch(error){
        console.log("error sending verification email", error)
        return {success : false , message: 'Failed to send verification email'}
    }
}