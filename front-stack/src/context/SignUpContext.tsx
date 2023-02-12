import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";


export interface ISignUpProviderProps{
   onSubmitFunction : (data: ISubmitData) => Promise<void>
    back            : () => void;
    customerId      ?: string


}
interface ISignupProps{
    children: ReactNode;
}

export interface ISubmitData {
    name            : string
    email           : string
    password        : string
    passwordConfirm : string
    phone           : number

}


export const SignupContext = createContext({} as ISignUpProviderProps)



const SignUpProvider = ({children}:ISignupProps)=>{

    const [customerId, setCustomerId] = useState<string>()

    const navigate = useNavigate()

    const onSubmitFunction = async (data: ISubmitData)=>{

              

        try{
            await api.post("/customer", data).then((response)=>{
                const newCustomer = response.data.id
                setCustomerId(newCustomer)
            })
            navigate("/")
        }catch(error){
            console.error(error)
        }
    }


    const back = ()=>{
        navigate("/")
    }
    return (
        <SignupContext.Provider value ={{onSubmitFunction, back, customerId}} >
            {children}
        </SignupContext.Provider>
    )

}

export default SignUpProvider

