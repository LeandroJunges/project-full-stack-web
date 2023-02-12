import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

    password: yup.string().required("Campo obrigatório").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Deve conter 8 caracteres, uma maiuscula, uma minuscula, um numero e um caractere especial"),


})

export const signUpSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Deve conter 8 caracteres,uma maiuscula, uma minuscula,um numero e um caractere especial!"
    ),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "A senha deve ser a mesma")
    .required("Campo obrigatório"),
})




export const schemaModal = yup.object().shape({
  name: yup.string().required("Campo Obrigatorio!"),
  email: yup.string().email("E-mail invalido").required("Campo obrigatório"),
  phone: yup.number().required("Campo obrigatório!").positive("Deve ser um numero inteiro sem pontuação")
});