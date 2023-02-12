import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import "dotenv/config"


const authTokenMiddleware = async (req: Request, res: Response, next: NextFunction)=>{
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Invalid token",
        })
    }
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any)=>{
        if(error){
            return res.status(401).json({
                message: "Invalid token",
            })
        }
        req.employee = {
            isAdm: decoded.isAdm,
            id: decoded.id
        }
        return next()
    })
}

export default authTokenMiddleware