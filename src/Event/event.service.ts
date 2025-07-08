import { Event } from "./event";
import { AppDataSource } from "../data-source";
import { CreateEventDto } from "./event.dto";

export const eventRepo = AppDataSource.getRepository(Event)

// Event
// id: UUID (PK)
// title: string
// description: string
// date: timestamp
// totalSeats: number
// bookedSeats: number (or derive from bookings)

export const eventService ={
    createEvent: async(data:CreateEventDto) => {

        const event = eventRepo.create({
       title:data.title,
       id:"",
        
            description:data.description,
            totalSeats: 0,
            bookedSeats: 0
        })

        return await eventRepo.save(event)
    },

    getAllEvents: async() =>{
        return await eventRepo.find()
    },

    getEventById: async(eventId:string) => {
        return await eventRepo.findOneBy({id:eventId})
    },


}


