import { ICustomerUpdate } from './../../interfaces/customer/index';
import { Request, Response } from "express";
import updateCustomerService from '../../services/customers/updateCustomer.services';
import { instanceToPlain } from 'class-transformer';

const updateCustomerController = async (req:Request, res:Response) => {
    const customer: ICustomerUpdate = req.body
    const id : string = req.params.id;
    const updatedCustomer = await updateCustomerService(customer, id);

    return res.json(instanceToPlain(updatedCustomer));

  
}

export default updateCustomerController