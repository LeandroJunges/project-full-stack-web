import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import {Customer} from "./customer.entity"

@Entity("contacts")

class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 120})
    name: string

    @Column({default:true})
    isActive: boolean

    @Column({length:120})
    email: string

    @Column()
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(()=>Customer, {eager: true})
    customer: Customer
}

export {Contact}