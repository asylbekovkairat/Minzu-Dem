import * as Yup from "yup";

export const PaintingFormValidation = Yup.object().shape({
  from_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please, enter your name"),
  from_email: Yup.string()
    .email("Please enter valid email")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your email"),
});
