import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError } from "../../error/appError";
import createCustomerService from "../../services/customers/createCusotmer.services";

const createCustomerController = async (req:Request, res:Response)=>{
    try {
        const customer = req.body
        const createdCustomer = await createCustomerService(customer)
        return res.status(201).json(instanceToPlain(createdCustomer))
        
    } catch (error) {

        if(error instanceof Error){
            throw new AppError(error.message, 400);
            
        }
        
    }
        
    
}

export default createCustomerController