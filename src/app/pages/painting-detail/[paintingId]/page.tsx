"use client";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { RefObject, useEffect, useMemo, useState } from "react";
import { IPainting, PAINTINGS } from "src/constants";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import Modal from "src/components/Modal";
import { sendPaintRequest } from "src/services/email";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { PaintingFormValidation } from "./PaintingForm.schema";
import { sendNotification } from "src/services/notification";
import SuccessModal from "src/components/Modal/SuccessModal";
import { formatPrice } from "src/helpers/formatPrice";
import MainImage from "src/components/MainImage";
import ImageModal from "src/components/Modal/ImageModal";

const SoldBadge = ({ className = "" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-3 py-1 bg-white border-2 border-red-600 text-red-600 text-sm font-bold uppercase tracking-wider rounded-md shadow-md ${className}`}
    >
      🔴 SOLD
    </div>
  );
};

const PaintingDetail = () => {
  const { paintingId } = useParams();
  const [currentPaint, setCurrentPaint] = useState<IPainting>();
  const [imageToShow, setImageToShow] = useState<string | undefined>(
    currentPaint?.mainImage
  );
  const [requestResult, setRequestResult] = useState({
    isModalOpen: false,
    isSuccess: false,
  });
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [inquiryModal, setInquiryModal] = useState<boolean>(false);
  const formRef = React.createRef<HTMLFormElement>();
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

  useEffect(() => {
    setImageToShow(currentPaint?.mainImage);
  }, [currentPaint?.mainImage]);

  useEffect(() => {
    if (paintingId) {
      const paintId = +paintingId;
      const paint = PAINTINGS.find((paint) => paintId === paint.id);

      setCurrentPaint(paint);
    }
  }, [paintingId]);

  const renderImages = useMemo(
    () =>
      currentPaint?.images.map(({ src, id }) => (
        <Image
          className="cursor-pointer w-[55px] h-[55px]"
          key={id}
          src={src}
          alt="untitled 5"
          width={55}
          height={55}
          onClick={() => setImageToShow(src)}
        />
      )),
    [currentPaint?.images]
  );

  const renderImageSlides = useMemo(
    () =>
      currentPaint?.images.map(({ src, id }) => (
        <SwiperSlide
          key={id}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="object-contain"
            src={src}
            alt={src}
            onClick={() => {
              setImageToShow(src);
              openImage();
            }}
          />
        </SwiperSlide>
      )),
    [currentPaint?.images]
  );

  const handleSubmit = async (values: any, { resetForm }: any) => {
    const isRequestSent = sendPaintRequest(formRef.current);
    if (isRequestSent) {
      setInquiryModal(false);
      setRequestResult({ isModalOpen: true, isSuccess: true });
      resetForm();
      await sendNotification(
        values.from_name,
        values.from_email,
        values.message || "painting request"
      );
    } else {
      setRequestResult({ isModalOpen: true, isSuccess: false });
    }
  };
  const handleCloseModal = () => setInquiryModal(false);
  const handleOpenModal = () => setInquiryModal(true);

  const openImage = () => setIsImageOpen(true);
  const closeImage = () => setIsImageOpen(false);

  return (
    <>
      <SuccessModal
        isOpen={requestResult.isModalOpen}
        isSuccess={requestResult.isSuccess}
        onClose={() =>
          setRequestResult({ isModalOpen: false, isSuccess: false })
        }
      />
      <ImageModal
        isOpen={isImageOpen}
        onClose={closeImage}
        thumbnailURL={imageToShow}
      />
      <div className="container">
        <main className="flex mt-[75px] items-start tablet:flex-col mobile:mt-0">
          <section className="w-1/2 flex gap-3 mobile:w-full">
            <div className="flex flex-col flex-wrap gap-3 mobile:hidden">
              {renderImages}
            </div>
            <div className="relative w-full max-h-[500px] justify-center  flex pl-9 mobile:pr-0 mobile:pl-0">
              <MainImage thumbnailURL={imageToShow} openImage={openImage} />
              <Swiper
                scrollbar={{
                  hide: false,
                }}
                modules={[Scrollbar, Pagination]}
                className="mySwiper details-slider"
              >
                {renderImageSlides}
              </Swiper>
            </div>
          </section>
          <section className="w-1/2 mobile:w-full mobile:mt-[10px] ">
            <div className="flex flex-col gap-16 items-start justify-between mobile:justify-normal mobile:gap-4 mobile:h-auto">
              <div className="flex items-center gap-3">
                <h2 className="font-bold text-3xl">{currentPaint?.title}</h2>
                {currentPaint?.sold && <SoldBadge className="ml-2" />}
              </div>

              <div className="flex flex-col gap-2">
                {Array.isArray(currentPaint?.description) ? (
                  currentPaint.description.map((desc) => (
                    <div>
                      <p>{desc}</p>
                    </div>
                  ))
                ) : (
                  <p>{currentPaint?.description}</p>
                )}
                <div className="mt-7 mb-6">
                  <p className="font-semibold">{currentPaint?.paintingType} </p>
                  <p>
                    <strong>Size:</strong> {currentPaint?.sizes.width} W x{" "}
                    {currentPaint?.sizes.height} H x {currentPaint?.sizes.d} D
                    cm
                  </p>
                  <p className="mt-3 mobile:mt-0">
                    {currentPaint?.price && (
                      <>
                        <strong>Price</strong>: &#x20ac;{" "}
                        {formatPrice(currentPaint.price)}
                      </>
                    )}
                  </p>
                  {!currentPaint?.sold && (
                    <p className="mt-[8px] text-[#bfbdbd]">Ships in a Box</p>
                  )}
                </div>
                {!currentPaint?.sold && (
                  <button
                    className="border border-black w-full py-4 text-[18px] hover:bg-[#3a3a3a] hover:text-white transition duration-500 ease-in-out self-end"
                    onClick={handleOpenModal}
                  >
                    I want to buy it
                  </button>
                )}
              </div>
            </div>
          </section>
        </main>
        <Modal isOpen={inquiryModal} onClose={handleCloseModal}>
          <Formik
            initialValues={{
              from_name: "",
              from_email: "",
              phone: "",
              message: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={PaintingFormValidation}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ errors }) => (
              <Form
                className="m-3 flex flex-col gap-2"
                ref={formRef as unknown as RefObject<HTMLFormElement>}
              >
                <h3>Please, leave your contact data</h3>

                <div className="flex flex-col mobile:col-span-2">
                  <Field
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className={`w-full px-[12px] py-[8px] border-[#ccc] border-2 rounded-sm outline-none ${
                      errors.from_name && "border-red-600"
                    } transition-all duration-500`}
                  />
                  <ErrorMessage
                    className="text-red-600 transition-colors"
                    name="from_name"
                    component="div"
                  />
                </div>
                <div className="flex flex-col ">
                  <Field
                    className={`w-full px-[12px] py-[8px] border-[#ccc] border-2 rounded-sm outline-none ${
                      errors.from_email && "border-red-600"
                    } transition-all duration-500`}
                    name="from_email"
                    placeholder="Your Email"
                  />
                  <ErrorMessage
                    className="text-red-600 transition-colors"
                    name="from_email"
                    component="div"
                  />
                </div>
                <div className="flex flex-col ">
                  <Field
                    className={`h-24 w-full px-[12px] py-[10px] border-[#ccc] border-2 rounded-sm`}
                    name="message"
                    as="textarea"
                    placeholder="Your message"
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
        </Modal>
      </div>
    </>
  );
};

export default PaintingDetail;
