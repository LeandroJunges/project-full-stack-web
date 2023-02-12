import { Router } from "express";
import loginCustomerController from "../controllers/login/loginCustomer.controller";

const loginRoutes = Router()

loginRoutes.post("", loginCustomerController)

export default loginRoutes