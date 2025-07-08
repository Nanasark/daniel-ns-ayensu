import { User } from "../User/user.dto"
import { Event } from "../Event/event"
export interface CreateBooking{
    seats: number
    createdAt: Date
    user: User
    event:Event
}