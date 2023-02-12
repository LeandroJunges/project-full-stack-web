import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";
import { SignupContext } from "./SignUpContext";


export interface IAuthContextData{
    newCustomer : ICustomer | null;
    loading     : boolean
    signIn      : (props: ILoginProps) => void;
    logout      : ()=> void;


}

export interface ICustomer {
    id      : string;
    name    : string;
    email   : string;
    password: string;
    isAdm   : boolean;
    phone   : number;
}


export interface ILoginProps{
    email   : string;
    password: string;
}


export const LoginContext = createContext<IAuthContextData>({} as IAuthContextData);

export interface IAuthContext{
    children: ReactNode;
}

const AuthProvider = ({children}:IAuthContext)=>{

    const [newCustomer, setNewCustomer] = useState<ICustomer | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate();
    const tokenCustomer = localStorage.getItem("@loginCustomer:token")
    const customerId = localStorage.getItem("@customer:id")


    
    const signIn = (data:ILoginProps) =>{
        
        api.post("/login", data).then((response) =>{
            const customer = response.data.customer
            setNewCustomer(response.data.customer)
            api.defaults.headers.common.Authorization = `Bearer ${tokenCustomer}`
            localStorage.setItem("@loginCustomer:token", response.data.token)
            localStorage.setItem("@customerId:id", customer.id)
            navigate("/dashboard", {replace: true})
        }).catch((error)=>{
            console.error("Erro de requisicao", error);
        })
    }
           
    useEffect(()=>{
            async function loadUser(){
                    setLoading(true)
                    if(tokenCustomer){
                            const idCustomer = localStorage.getItem("@customerId:id")
                    try {
                            api.defaults.headers.common.Authorization = `Bearer ${tokenCustomer}`;
                        const {data} = await api.get(`/customer/${idCustomer}`);
                        console.log(data)
                        setNewCustomer(data)
                    }catch (error){
                            console.error(error)
                        }
                    }
                    setLoading(false)
                }
                loadUser()
            },[]);

    const editCustomer = async ()=>{
        try{

            api.defaults.headers.common.Authorization = `Bearer ${tokenCustomer}`
            const {data} = await api.patch(`/customer/${customerId}`)
            setNewCustomer(data)

        }catch(error:any){
            console.error(error.response)
        }
    };

    const deleteCustomer = async () =>{

        try{

            api.defaults.headers.common.Authorization = `Bearer ${tokenCustomer}`
            await api.delete(`/customer/${customerId}`)
            setNewCustomer(null)

        }catch(error:any){
            console.error(error.response)
        }

    }
    
      


    const logout = () =>{
        localStorage.clear();
        navigate("/")
    }

    return (
        <LoginContext.Provider value={{signIn, logout, newCustomer, loading}}>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthProvider 