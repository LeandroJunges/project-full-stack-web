
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../validators";
import { ISignUpProviderProps, ISubmitData, SignupContext } from "../../context/SignUpContext";
import { useContext } from "react";
import { Form } from "./styles";
import HeaderSignUp from "../../components/Header";
import { ContainerSignUp } from "../../components/ContainerForm/styles";

const SignUp = ()=>{

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(signUpSchema),
  });
  const { onSubmitFunction, back } =
    useContext<ISignUpProviderProps>(SignupContext);

    const onSubmitSignUp = handleSubmit(onSubmitFunction)
  
  
    return (
      <>
        <HeaderSignUp />
        <ContainerSignUp>
            <Form onSubmit={onSubmitSignUp}>
                <h3>Cadastro</h3>
                <label htmlFor="name">
                <input type="text" id="Iname" placeholder="Nome completo" {...register("name")} />
                </label>

                <label htmlFor="email">
                <input type="email" id="Iemail" placeholder="E-mail" {...register("email")} />
                </label>

                <label htmlFor="password">
                <input type="password" id="password" {...register("password")} placeholder="Senha" />
                </label>


                <label htmlFor="confirmPassword">
                <input type="password" id="confirmPassword" {...register("passwordConfirm")} placeholder="Confirmação de senha" />
                </label>

                
                <label htmlFor="phone">
                <input type="tel" id="Iphone" placeholder="Número de telefone" {...register("phone")} />
                </label>

                <button>Cadastrar</button>
            </Form>
        </ContainerSignUp>
      </>
    )

}

export default SignUp