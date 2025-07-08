import { Request,Response } from "express";
import userService from "./user.service";
import { Register } from "./user.dto";
import bcrypt from "bcryptjs";


export const userController ={
    registerUser: async (req:Request,res:Response) =>{
        const {email,password} =  req.body

        try {
            const salt =bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hash(password,salt)
            const data={
                email:email,
                password:hashedPassword
            }

            userService.registerUser(data)

            res.status(200).json({message:"registered successfully"})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"internal error"})
        }

        
    },

    loginUser: async(req: Request, res: Response) =>{
        const { email, password} = req.body

      
        try {
     const foundUser = await userService.findByEmail(email)
        if(!foundUser){
            return res.status(404).json({message:"user not found"})
            
        }

        const isMatch = bcrypt.compareSync(password,  foundUser.password)

        if(isMatch){
            return foundUser
           
        }else{
            throw new Error("Invalid Credentials")
        }

        } catch (error) {
            
        }
    }
}