import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import listContactController from "../controllers/contacts/listContact.controller";
import updateContactController from "../controllers/contacts/updateContac.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const contactRoutes = Router()

contactRoutes.post("", authTokenMiddleware, isAdmMiddleware, createContactController)
contactRoutes.get("", authTokenMiddleware, isAdmMiddleware, listContactController)
contactRoutes.patch("/:id", authTokenMiddleware, isAdmMiddleware,updateContactController)
contactRoutes.delete("/:id", authTokenMiddleware, isAdmMiddleware, deleteContactController)


export default contactRoutes