import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { loginSchema } from "../../validators";
import { ILoginProps, LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import { FormLogin } from "./styles";
import { Container } from "../../components/ContainerForm/styles";
import { HeaderLogin } from "../../components/HeaderDashboard/styles";

const Login = ()=>{

    const {register, handleSubmit, formState:{errors} } = useForm<ILoginProps>({
        resolver: yupResolver(loginSchema)
    })

    const {signIn} = useContext(LoginContext)
    const onSubmit = handleSubmit(signIn)


    return (
        <>
            <HeaderLogin>
                <h1>My schedule </h1>
            </HeaderLogin>
            <Container>
                <h3 className="titleForm">Login</h3>
                <FormLogin onSubmit={onSubmit} >
                    <label htmlFor="email">
                        <input type="email" id="email" placeholder="E-mail" {...register("email")} />
                    </label>
                    <span>{errors?.email?.message}</span>
                    <label htmlFor="password">
                        <input type="password" id="password" placeholder="Senha" {...register("password")} />
                    </label>
                    <span>{errors?.password?.message}</span>
                    <button>Entrar</button>
                    <p>Ainda não tem cadastro? <a href="/signup"> clique aqui</a> </p>
                </FormLogin>
            </Container>
        </>
    )
}

export default Login;