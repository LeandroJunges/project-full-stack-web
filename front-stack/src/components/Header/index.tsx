import { useContext } from "react"
import { SignupContext } from "../../context/SignUpContext"
import {Header} from "./styles"

const HeaderSignUp = ()=>{
    const {back} = useContext(SignupContext)
    return(
        <Header>
            <h1> My Schedule </h1>
            <button onClick={()=> back()} >Voltar</button>
           
        </Header>
    )
}

export default HeaderSignUp