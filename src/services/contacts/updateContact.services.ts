import AppDataSource from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../error/appError';
import { IContactUpdate } from './../../interfaces/contacts/index';
const updateContactService = async ({name, email, phone}:IContactUpdate, id:string)=>{

    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({
        id
    })

    if(!findContact){
        throw new AppError("Contact not found", 404)
    }
    await contactRepository.update(id, {
        name: name? name: findContact.name,
        email: email? email: findContact.email,
        phone: phone? phone: findContact.phone
    })

    const contact = await contactRepository.findOneBy({
        id
    })

    return contact
}

export default updateContactService