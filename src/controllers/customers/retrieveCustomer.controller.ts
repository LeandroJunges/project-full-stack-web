import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveCustomerService from "../../services/customers/retrieveCustomer.services";


const retrieveCustomerController = async (req: Request, res: Response)=>{

    const {id} = req.params;

    const customerId = await retrieveCustomerService(id)

    return res.json(instanceToPlain(customerId))

}


export default retrieveCustomerController
