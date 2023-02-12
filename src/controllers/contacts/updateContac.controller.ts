import { IContactUpdate } from './../../interfaces/contacts/index';
import { Request, Response } from "express";
import updateContactService from '../../services/contacts/updateContact.services';

const updateContactController = async (req: Request, res:Response)=>{
    const contact:IContactUpdate = req.body
    const id: string = req.params.id;
    const updatedContact = await updateContactService(contact, id);

    return res.json(updatedContact);
}

export default updateContactController