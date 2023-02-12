import { ICustomerRequest } from './../../interfaces/customer/index';
import AppDataSource from "../../data-source"
import {Customer} from "../../entities/customer.entity"
import { hash } from 'bcrypt';



const createCustomerService = async ({name,email,phone, password, isAdm}:ICustomerRequest) =>{
    const customerRepository = AppDataSource.getRepository(Customer)

    const hashedPassword = await hash(password, 10)
   
    
    const customer = customerRepository.create({
        name,
        email,
        phone,
        password : hashedPassword,
        isAdm
        
    })
   
    await customerRepository.save(customer)

    return customer

}

export default createCustomerService