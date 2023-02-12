import { Request, Response, NextFunction } from "express"

const updateMiddleware = async (req: Request, res: Response, next: NextFunction) =>{
    
    const keys = Object.keys(req.body)
    
    if(keys[0] == 'isAdm' || keys[0] == 'isActive' || keys[0] == 'id'){
    return res.status(401).json({
        message: 'Customer not altered'
    })
    }
    
    
    if(!req.employee.isAdm){
        return res.status(401).json({
            message: 'Customer is not admin'
        })
    }
    return next()
}
export default updateMiddleware