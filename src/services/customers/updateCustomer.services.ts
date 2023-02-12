import { ICustomerUpdate } from './../../interfaces/customer/index';
import AppDataSource from "../../data-source"
import {Customer} from "../../entities/customer.entity"
import { AppError } from '../../error/appError';

const updateCustomerService = async ({name,email,phone}:ICustomerUpdate, id: string) => {
    const customerRepository = AppDataSource.getRepository(Customer)

    const findCustomer = await customerRepository.findOneBy({
        id
    })
    if (!findCustomer) {
        throw new AppError("Customer not found", 404)
    }
    await customerRepository.update(id,{
        name: name? name: findCustomer.name,
        email: email? email: findCustomer.email,
        phone: phone? phone: findCustomer.phone
    })

    const customer = await customerRepository.findOneBy({
        id
    })

    return customer
}

export default updateCustomerService