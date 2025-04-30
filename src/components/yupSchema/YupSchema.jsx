import * as yup from "yup";
export const ContactShema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your name")
    .min(2, "your name must consist of at least 2 characters")
    .max(50, "Max 50 letters")
    .matches(/^[A-Za-zÇŞĞÜİÖçşğüıö' -]+$/, "Name can only contain letters."),
  email: yup
    .string()
    .required("no email, no message")
    .email("Please enter a valid email address."),
  subject: yup
    .string()
    .min(4, "your subject must consist of at least 4 characters "),
  message: yup.string().required("Please write message"),
});
