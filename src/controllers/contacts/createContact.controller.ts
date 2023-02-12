import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.services";

const createContactController = async (req: Request, res: Response)=>{

    const contact = req.body

    const createdContact = await createContactService(contact)

    return res.status(201).json(createdContact)
    
}

export default createContactController