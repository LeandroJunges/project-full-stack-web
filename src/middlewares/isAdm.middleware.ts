import { Request, Response, NextFunction } from "express";

const isAdmMiddleware = async (req: Request, res: Response, next: NextFunction)=>{
    if(!req.employee.isAdm){
        return res.status(403).json({
            message: 'Employee is not admin'
        })
    }
    return next()
}

export default isAdmMiddleware