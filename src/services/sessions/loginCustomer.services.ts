import { compare } from 'bcrypt';
import AppDataSource from '../../data-source';
import { AppError } from '../../error/appError';
import jwt from "jsonwebtoken"
import "dotenv/config"
import { Customer } from '../../entities/customer.entity';
import { ICustomerLogin } from '../../interfaces/customer';


const loginCustomerService = async ({email, password}:ICustomerLogin)=>{

    const customerRepository = AppDataSource.getRepository(Customer)

    const customer = await customerRepository.findOneBy({
        email: email
    })

    if(!customer){
        throw new AppError("Invalid email or password", 403)
    }
    const passwordMatch = await compare(password, customer.password)

    if(!passwordMatch){
        throw new AppError("Invalid email or password", 403)

    }
    const token = jwt.sign({
        isAdm: customer.isAdm,
        email: customer.email
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn:"24h",
            subject: customer.id
        }
    )
    return {customer, token}

}

export default loginCustomerService