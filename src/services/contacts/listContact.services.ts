import AppDataSource from "../../data-source"
import { Customer } from "../../entities/customer.entity"
import { AppError } from "../../error/appError"

const listContactService = async (customerId : string)=>{
    const customerRepository = AppDataSource.getRepository(Customer)
    const customer = await customerRepository.findOne({
        where:{
            id: customerId,
        },
        relations:{
            contacts: true
        }
    })

    if(!customer){
        throw new AppError("Customer id not found", 404)
    }

    return customer.contacts;
}

export default listContactService