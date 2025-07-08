
import { DataSource } from 'typeorm';
import { User } from './User/user';
import { Event } from './Event/event';
import { Booking } from './Booking/booking';

export const AppDataSource = new DataSource({
    type:"postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',   
    password: 'PopsCorner',
    database: 'interview',       
    synchronize: true,  
    logging: false,
    entities: [User, Event,Booking]
})