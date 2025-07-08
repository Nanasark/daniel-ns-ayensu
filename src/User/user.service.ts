import { User } from "./user"
import { AppDataSource } from "../data-source"
import { Register } from "./user.dto"
const userRepo = AppDataSource.getRepository(User)

export const userService ={
    registerUser: async(data:Register) => {
       const user = userRepo.create({
            email:data.email,
            password:data.password
       })

       return await userRepo.save(user)
    },

    findByEmail: async(email:string) =>{
       return await userRepo.findOneBy({email})
    }
    // getUSerById: async(userId:string) => {
    //    return await userRepo.findOneBy({userId})
    // },

    // updateUsername: async(userId:string, newUsername: string) =>{
    //     const user = await userRepo.findOneBy({userId})

    //     if(!user) return null
    //     user.username = newUsername;
    //     user.usernameLastChangedAt = new Date();
    //     return await userRepo.save(user)
    // },

    // deleteUser: async(userId:string) =>{
    //     await userRepo.delete({userId})
    //     return {message:"user deleted"}
    // },

    // getAllUsers: async() => {
    //     return await userRepo.find()
    // },

    // getEventSeat: async() =>{
            
    // }
}

export default userService