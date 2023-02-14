import { Request, Response } from "express";
import listContactService from "../../services/contacts/listContact.services";

const listContactController = async (req: Request, res: Response)=>{
    const idCustomer = req.params.id
    const contacts = await listContactService(idCustomer)

    return res.json(contacts)
}

export default listContactController