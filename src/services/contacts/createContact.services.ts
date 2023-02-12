import { IContactRequest } from './../../interfaces/contacts/index';
import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { Customer } from '../../entities/customer.entity';
import { AppError } from '../../error/appError';

const createContactService = async ({name,email,phone,customerId }:IContactRequest): Promise<Contact> =>{
    const contactRepository = AppDataSource.getRepository(Contact)
    const customerRepository = AppDataSource.getRepository(Customer)

    const findCustomer = await customerRepository.findOneBy({id: customerId})

    if(!findCustomer){
        throw new AppError("Customer not found", 404)
    }

    const contact = contactRepository.create({

        name,
        email,
        phone,
        customer : findCustomer
            })
    await contactRepository.save(contact)

    return contact
}

export default createContactService