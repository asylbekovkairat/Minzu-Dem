"use client";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IPainting, PAINTINGS } from "src/constants";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import Modal from "src/components/Modal";

const PaintingDetail = () => {
  const { paintingId } = useParams();
  const [currentPaint, setCurrentPaint] = useState<IPainting>();
  const [imageToShow, setImageToShow] = useState<string | undefined>(
    currentPaint?.mainImage
  );

  const [inquiryModal, setInquiryModal] = useState<boolean>(false);
  const [paintingModal, setPaintingModal] = useState<string | undefined>("");

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

  const handleCloseModal = () => {
    setInquiryModal(false);
    setPaintingModal("");
  };
  const handleOpenModal = () => setInquiryModal(true);

  const openPaintingModal = (paintingSrc: string | undefined) =>
    setPaintingModal(paintingSrc);

  return (
    <div className="container">
      <main className="flex mt-[75px] items-start tablet:flex-col mobile:mt-0">
        <section className="w-1/2 flex gap-3 mobile:w-full">
          <div className="flex flex-col flex-wrap gap-3 mobile:hidden">
            {renderImages}
          </div>
          <div className="relative w-full max-h-[500px]  h-[500px] flex justify-center pr-7 mobile:pr-0">
            <img
              className="h-full mobile:hidden"
              src={imageToShow}
              alt=""
              onClick={() => openPaintingModal(imageToShow)}
            />
            <Swiper
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar, Pagination]}
              className="mySwiper details-slider"
            >
              {currentPaint?.images.map(({ src, id }) => (
                <SwiperSlide
                  key={id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={src}
                    alt={src}
                    onClick={() => openPaintingModal(src)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="w-1/2 mobile:w-full mobile:mt-[10px] ">
          <div className="flex flex-col gap-16 items-start justify-between mobile:justify-normal mobile:gap-4 mobile:h-auto">
            <div>
              <h2 className="font-bold text-3xl">{currentPaint?.title}</h2>
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
                  {currentPaint?.sizes.height} H x {currentPaint?.sizes.d} D cm
                </p>
                <p className="mt-3 mobile:mt-0">
                  <strong>Price</strong>: &#x20ac;{currentPaint?.price}
                </p>
                <p className="mt-[8px] text-[#bfbdbd]">Ships in a Box</p>
              </div>
              <button
                className="border border-black w-full py-4 text-[18px] hover:bg-[#3a3a3a] hover:text-white transition duration-500 ease-in-out self-end"
                onClick={handleOpenModal}
              >
                I want to buy it
              </button>
            </div>
          </div>
        </section>
      </main>
      <Modal isOpen={inquiryModal} onClose={handleCloseModal}>
        <form className="m-3 flex flex-col gap-2">
          <h3>Please, leave your contact data</h3>
          <input
            className="w-full px-[12px] py-[8px] border-[#ccc] border-2 rounded-sm"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="w-full px-[12px] py-[8px] border-[#ccc] border-2 rounded-sm"
            placeholder="Your Email"
            type="text"
          />
          <textarea
            className="h-24 w-full px-[12px] py-[10px] border-[#ccc] border-2 rounded-sm"
            placeholder="Your message"
          />
          <button
            className="max-w-32 uppercase rounded-s-none rounded-e-sm px-[18px] py-[10px] bg-[#3a3a3a] text-white font-bold tracking-[0.15em]"
            type="button"
          >
            Send
          </button>
        </form>
      </Modal>
      <Modal isOpen={!!paintingModal} onClose={handleCloseModal}>
        <img
          className="w-full max-h-[500px]"
          src={paintingModal}
          alt="detailed painting"
        />
      </Modal>
    </div>
  );
};

export default PaintingDetail;
