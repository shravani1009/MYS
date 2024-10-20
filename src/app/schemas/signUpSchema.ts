import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2,"username must be atleast 2 characters")
    .max(20,"no more than 20 characters");
    