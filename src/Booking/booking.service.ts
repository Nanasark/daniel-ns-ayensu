import { Booking } from "./booking";
import { AppDataSource } from "../data-source";
import { eventRepo, eventService } from "../Event/event.service";
import { CreateBooking } from "./bookings.dto";

export const bookRepo = AppDataSource.getRepository(Booking)


export const bookingService = {
    getAllbookings: async() => {
        return await bookRepo.find()
    },

    bookSeat: async(data:CreateBooking) => {
        const availableSeat = bookingService.getAvailableSeat(data.event.id)
        if(await availableSeat < data.seats){
            console.error("no available seats")
            return
            
        }
        const bookseat = bookRepo.create({
            seats:data.seats,
            event:data.event,
            user:data.user
        })

        return await bookRepo.save(bookseat)
    }
,
    getAvailableSeat: async(eventId: string) => {

        const event = await eventService.getEventById(eventId)
                if(!event){
                    throw new Error("event not found")
                }
        const booked = event?.bookedSeats
        const totalseats = event?.totalSeats
        return totalseats.length - booked.length
    }
}