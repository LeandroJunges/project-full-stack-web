import { instanceToPlain } from 'class-transformer';
import { Request, Response } from "express";
import loginCustomerService from '../../services/sessions/loginCustomer.services';

const loginCustomerController = async(req: Request, res: Response)=>{

    const data = req.body
    const token = await loginCustomerService(data)

    return res.json(instanceToPlain (token))

}

export default loginCustomerController