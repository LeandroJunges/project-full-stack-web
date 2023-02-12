import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext, IContactData } from "../../context/ContactContext";
import { schemaModal } from "../../validators";
import { ContainerGeneral, ContainerModal, ModalHeader } from "./styles";
import { MdClose } from "react-icons/md";

interface ICloseModalProps {
    closeModal: ()=> void;
}


const Modal = ({closeModal}:ICloseModalProps)=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IContactData>({
        resolver: yupResolver(schemaModal),
      });
      const { addContact } = useContext(ContactContext);
    
      return (
        <ContainerGeneral>
          <ContainerModal>
            <ModalHeader>
              <h4>Cadastrar Contatos</h4>
              <button onClick={closeModal}>
                <MdClose size={22} />
              </button>
            </ModalHeader>
            <form onSubmit={handleSubmit(addContact)}>
              <label htmlFor="cNameTech">nome</label>
              <input
                type="text"
                id="cNameTech"
                placeholder=" Digite um novo contato"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label htmlFor="cEmail">email</label>
              <input
                type="email"
                id="cEmail"
                placeholder=" Digite um email "
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label htmlFor="cPhone">phone</label>
              <input
                type="tel"
                id="cPhone"
                placeholder=" x. xxxx xxxx"
                {...register("phone")}
              />
              <span>{errors.phone?.message}</span>
    
              
              <button type="submit">Cadastrar Contato</button>
            </form>
          </ContainerModal>
        </ContainerGeneral>
      );
    }
    export default Modal;