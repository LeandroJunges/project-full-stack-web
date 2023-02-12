import { Exclude } from "class-transformer";
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm"
import { Contact } from "./contact.entity";


@Entity("customers")
class Customer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 120})
    name: string;

    @Column({length: 120})
    @Exclude()
    password: string

    @Column({default: true})
    isAdm: boolean

    @Column({default:true})
    isActive: boolean
    
    @Column({length:120, unique:true})
    email: string;

    @Column()
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> Contact, (contact)=> contact.customer )
    contacts: Contact[]

    


}


export {Customer}