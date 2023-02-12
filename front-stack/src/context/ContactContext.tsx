import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services";

interface IContactProviderProps {
    contacts        : IContactData[];
    isOpenModal     : boolean;
    setContacts     : React.Dispatch<React.SetStateAction<IContactData[]>>;
    addContact      : (data: IContactData) => Promise<void>; 
    removeContact   : (id: string) => Promise<void>;
    showContacts    : (id: string) => Promise<void>;
    openModal       : () => void;
    closeModal      : () => void;


}

export interface IContactData {
    id         ?: string
    name        : string   
    email       : string
    phone       : string
    customerId  : string
    isActive    : boolean
}

interface IContactProps{
    children: ReactNode
}

export const ContactContext = createContext({} as IContactProviderProps)

const ContactProvider = ({children}:IContactProps) => {
    const [contacts, setContacts] = useState<IContactData[]>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)


    const openModal = () => {
        setIsOpenModal(true);
      };

    const closeModal = () => {
        setIsOpenModal(false);
      };

    
    useEffect(()=>{
        const person = localStorage.getItem("@customerId:id")|| "{}"
        console.log(typeof person)
        showContacts(person)
        
    },[])
    
    const showContacts = async (id:string) =>{
        const token = localStorage.getItem("@loginCustomer:token");
        api.get(`/customer/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((response)=>{
            setContacts(response.data.contacts)
        }).catch((error)=> console.error("erro de requisição", error));
    }

    const removeContact = async (id: string) => {
        const person = localStorage.getItem("@customerId:id")

        const token = localStorage.getItem("@loginCustomer:token");
        if(token){

            api.delete(`/contact/${id}`, {
                headers: {
                        Authorization: `Bearer ${token}`
                    },
            }).then(()=>{
                showContacts(person!)
            }).catch((error)=> console.error("erro de requisição", error));
           
        }

    }
    
    const addContact = async (data: IContactData)=>{
        const token = localStorage.getItem("@loginCustomer:token")
        const person = localStorage.getItem("@customerId:id")
        
        data.customerId = person!
        
        
        try{
            await api.post("/contact", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            showContacts(person!)
            setIsOpenModal(false)

        } catch (error){
            console.error("Erro de requisição2", error)
        }
    }

    return (
        <ContactContext.Provider value={{contacts, setContacts ,addContact, removeContact, showContacts, isOpenModal, openModal, closeModal}} >
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;