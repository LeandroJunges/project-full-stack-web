import { Router } from "express";
import deleteContactController from "../controllers/contacts/deleteContact.controller"
import createCustomerController from "../controllers/customers/createCustomer.controller";
import deletedCustomerController from "../controllers/customers/deleteCustomer.controller";
import listCustomerController from "../controllers/customers/listCustomer.controller";
import retrieveCustomerController from "../controllers/customers/retrieveCustomer.controller";
import updateCustomerController from "../controllers/customers/updateCustomer.contoller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import updateMiddleware from "../middlewares/update.middleware";

const customerRoutes = Router()

customerRoutes.post("", createCustomerController)
customerRoutes.get("",  listCustomerController)
customerRoutes.get("/:id", authTokenMiddleware,isAdmMiddleware, retrieveCustomerController)
customerRoutes.patch("/:id", authTokenMiddleware, updateMiddleware, updateCustomerController)
customerRoutes.delete("/:id", authTokenMiddleware,isAdmMiddleware, deletedCustomerController)

export default customerRoutes