"use client";
import React, { RefObject, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { sendContactRequest } from "src/services/email";
import { sendNotification } from "src/services/notification";
import SuccessModal from "src/components/Modal/SuccessModal";
import { ContactFormValidation } from "./contact.schema";

const Contact = () => {
  const formRef = React.createRef<HTMLFormElement>();
  const [requestResult, setRequestResult] = useState({
    isModalOpen: false,
    isSuccess: false,
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    const isRequestSent = sendContactRequest(formRef.current);
    if (isRequestSent) {
      setRequestResult({ isModalOpen: true, isSuccess: true });
      resetForm();
      await sendNotification(
        values.from_name,
        values.from_email,
        values.message
      );
    } else {
      setRequestResult({ isModalOpen: true, isSuccess: false });
    }
  };

  return (
    <>
      <SuccessModal
        isOpen={requestResult.isModalOpen}
        isSuccess={requestResult.isSuccess}
        onClose={() =>
          setRequestResult({ isModalOpen: false, isSuccess: false })
        }
      />
      <div className="container">
        <section className="mt-[75px] max-w-[1000px] mx-auto mobile:mt-11">
          <p className="mb-7 mx-auto max-w-[1200px]">
            You're welcome to contact us with any inquiry. For questions
            regarding your order, please include your order number.
          </p>
          <Formik
            initialValues={{
              from_name: "",
              from_email: "",
              phone: "",
              message: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={ContactFormValidation}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ errors }) => (
              <Form
                className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto mobile:mb-20"
                ref={formRef as unknown as RefObject<HTMLFormElement>}
              >
                <div className="flex flex-col mobile:col-span-2">
                  <label>Name</label>
                  <Field
                    type="text"
                    name="from_name"
                    className={`px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm outline-none ${
                      errors.from_name && "border-red-600"
                    } transition-all duration-500`}
                  />
                  <ErrorMessage
                    className="text-red-600 transition-colors"
                    name="from_name"
                    component="div"
                  />
                </div>
                <div className="flex flex-col mobile:col-span-2">
                  <label>Email</label>
                  <Field
                    className={`px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm outline-none ${
                      errors.from_email && "border-red-600"
                    } transition-all duration-500`}
                    name="from_email"
                  />
                  <ErrorMessage
                    className="text-red-600 transition-colors"
                    name="from_email"
                    component="div"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label>Phone number</label>
                  <Field
                    className={`px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm outline-none  ${
                      errors.phone && "border-red-600"
                    } transition-all duration-500`}
                    type="text"
                    name="phone"
                  />
                  <ErrorMessage
                    className="text-red-600 transition-colors"
                    name="phone"
                    component="div"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label>Message</label>
                  <Field
                    className={`min-h-52 px-[18px] py-[10px] border-[#ccc] border-2 rounded-sm outline-none`}
                    name="message"
                    as="textarea"
                  />
                </div>
                <button
                  className="max-w-32 uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]"
                  type="submit"
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  );
};

export default Contact;
