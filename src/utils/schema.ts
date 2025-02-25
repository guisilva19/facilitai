import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Insira o email"),
  senha: yup.string().required("Insira a senha"),
});