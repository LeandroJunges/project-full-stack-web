import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../error/appError"

const deleteContactService = async (id:string)=>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const deletedContact = await contactRepository.findOne({
        where:{
            id
        },
        relations:{
            customer: true,
        }
    })

    if(!deletedContact){
        throw new AppError("Contact not found",404);
        
    }

    
   
    await contactRepository.delete({id})

    if(deletedContact.isActive === false){
        throw new AppError("Contact already deleted",400);
    }

}

export default deleteContactService