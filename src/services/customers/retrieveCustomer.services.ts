import AppDataSource from "../../data-source"
import { Customer } from "../../entities/customer.entity"
import { AppError } from "../../error/appError"

const retrieveCustomerService = async (id: string )=>{
    const customerRepository = AppDataSource.getRepository(Customer)

    const findCustomer = await customerRepository.findOne({
        where: {id},
        relations: {contacts:true}
    })

    if(!findCustomer){

        throw new AppError("Customer not found", 404);
    }

    return findCustomer
    
}

export default retrieveCustomerService