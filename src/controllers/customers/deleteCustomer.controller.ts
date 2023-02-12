import { Request, Response } from "express";
import deleteCustomerService from "../../services/customers/deleteCustomer.services";

const deletedCustomerController = async (req:Request, res:Response) => {
    const id = req.params.id;
    await deleteCustomerService(id)
    return res.status(204).send()

};

export default deletedCustomerController