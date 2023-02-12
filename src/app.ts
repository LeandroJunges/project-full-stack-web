import "reflect-metadata"
import "express-async-errors"
import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import loginRoutes from "./routes/login.routes";
import customerRoutes from "./routes/customer.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

app.use(express.json());

let cors = require("cors");

app.use(cors());

app.use("/login", loginRoutes)
app.use("/customer", customerRoutes)
app.use("/contact", contactRoutes)

app.use(errorMiddleware)


export default app