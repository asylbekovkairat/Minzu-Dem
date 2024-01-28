import emailjs from "@emailjs/browser";

export const sendPaintRequest = (data: any) => {
  try {
    emailjs
      .sendForm(
        "service_jtg0j0q",
        "template_db8xuxk",
        data,
        "IkxkhKiMXnAXFp_3h"
      )
      .then((res) => res.status);
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};

export const sendContactRequest = (data: any) => {
  try {
    emailjs.sendForm(
      "service_jtg0j0q",
      "template_j7nzjm8",
      data,
      "IkxkhKiMXnAXFp_3h"
    );
    return true;
  } catch (error: any) {
    throw new Error(error);
  }
};
