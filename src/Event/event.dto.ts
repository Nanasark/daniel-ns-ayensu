export interface CreateEventDto{
    id: string
    title: string
    description: string
    date: Date
    totalSeats: number
    bookedSeats: number 
}