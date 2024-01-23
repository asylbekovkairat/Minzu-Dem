import emailjs from "@emailjs/browser";

export const sendEmail = (data: any, resetForm: () => void) => {
  try {
    emailjs.send(
      "service_rxp4pe5",
      "template_90fb6xp",
      data,
      "jjshbvx0cg2ZaZ7uj"
    );
    resetForm();
  } catch (error: any) {
    console.log("Something went wrong. Please try again");
  }
};
