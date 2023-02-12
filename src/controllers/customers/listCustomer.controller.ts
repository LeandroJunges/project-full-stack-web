import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listCustomerService from "../../services/customers/listCustomer.sevices";

const listCustomerController = async(req: Request, res: Response)=>{
    const customers = await listCustomerService()

    return res.json(instanceToPlain({data:customers}))
}


export default listCustomerController