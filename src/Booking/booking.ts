import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../User/user";
import { Event } from "../Event/event";
@Entity()
export class Booking{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    @ManyToOne(()=>User, (user) =>user.id)
    user!:User

    @Column()
    @ManyToOne(()=>Event, (event) =>event.id)
    event!: Event

    @Column()
    seats!: number | number[]

    @CreateDateColumn()
    createdAt!: Date
}