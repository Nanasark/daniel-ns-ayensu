import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event{
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    title!: string

    @Column()
    description!: string

    @Column()
    date!: Date

    @Column()
    totalSeats!: number[]

    @Column()
    bookedSeats!: number[] 

}

// Event
// id: UUID (PK)
// title: string
// description: string
// date: timestamp
// totalSeats: number
// bookedSeats: number (or derive from bookings)