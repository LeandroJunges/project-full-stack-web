import AppDataSource from "../../data-source"
import {Customer} from "../../entities/customer.entity"
import { AppError } from "../../error/appError"

const deleteCustomerService = async (id: string)=>{
    const customerRespository = AppDataSource.getRepository(Customer)

    const deletedCustomer = await customerRespository.findOneBy({
        id
    })
    if(!deletedCustomer){
        throw new AppError("Customer not found", 404);
        
    }
    await customerRespository.update(id,{
        isActive: false,
    });

    if(deletedCustomer.isActive === false){
        throw new AppError("Customer already deleted", 400)
    }
}


export default deleteCustomerService