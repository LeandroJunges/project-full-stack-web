import { useContext, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import HeaderDashboard from "../../components/HeaderDashboard";
import Modal from "../../components/Modal";
import { ContactContext, IContactData } from "../../context/ContactContext";
import { LoginContext } from "../../context/LoginContext";
import { ContainerContent, ContainerDashboard, ContainerList } from "./styles";


function Dashboard() {
    const { newCustomer } = useContext(LoginContext);
    const { removeContact, contacts, showContacts, isOpenModal, openModal, closeModal } =
      useContext(ContactContext);

  
    useEffect(() => {
      const person = JSON.parse(localStorage.getItem("@USERID") || "{}");
      showContacts(person);
    }, []);
  
    return (
      <>
        <HeaderDashboard />
        <ContainerDashboard>
          <h2>Olá {newCustomer!.name} ! </h2>
        </ContainerDashboard>
        <ContainerContent>
          <p>Contatos </p>
          <button onClick={openModal}>+</button>
        </ContainerContent>
        {isOpenModal && <Modal closeModal={closeModal} />}
  
        {contacts.length !== 0 ? (
          <ContainerList>
            {contacts?.filter((contact) => contact.isActive).map((contact) => (
              <li key={contact.id}>
                <div className="containerTech">
                  <p>nome: {contact.name}</p>
                  <p>email: {contact.email}</p>
                  <p>tel: {contact.phone}</p>
                </div>
                <button className="btnTrash">
                  <BsTrash
                    id={contact.id}
                    type="button"
                    size={20}
                    onClick={() => removeContact(contact.id!)}
                  />
                </button>
              </li>
            ))}
          </ContainerList>
        ) : (
          <p> Você não tem contato cadastrado no momento  '.' !</p>
        )}
      </>
    );
  }
  export default Dashboard;