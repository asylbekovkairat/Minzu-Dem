import * as Yup from "yup";

export const ContactFormValidation = Yup.object().shape({
  from_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please, enter your name"),
  from_email: Yup.string()
    .email("Please enter valid email")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your email"),
  phone: Yup.string()
    .min(9, "Too Short")
    .required("Please enter your phone number"),
});
