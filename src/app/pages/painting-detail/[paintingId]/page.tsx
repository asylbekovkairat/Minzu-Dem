"use client";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IPainting, PAINTINGS } from "src/constants";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const PaintingDetail = () => {
  const { paintingId } = useParams();
  const [currentPaint, setCurrentPaint] = useState<IPainting>();
  const [imageToShow, setImageToShow] = useState<string | undefined>(
    currentPaint?.mainImage
  );

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

  return (
    <>
      <main className="flex items-start mt-[75px] mobile:flex-col">
        <section className="w-1/2 flex mobile:w-full">
          <div className="flex flex-col flex-wrap gap-3 mobile:hidden">
            {renderImages}
          </div>
          <div className="relative w-full max-h-[500px]  h-[500px] flex justify-center pr-7 mobile:pr-0">
            <img className="h-full mobile:hidden" src={imageToShow} alt="" />
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="mySwiper details-slider"
            >
              {currentPaint?.images.map(({ src, id }) => (
                <SwiperSlide
                  key={id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={src} alt={src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* <Slider {...settings}>{renderImages}</Slider> */}
        <section className="w-1/2 mobile:w-full">
          <div className="max-h-[500px] h-[500px] flex flex-col gap-16 items-start justify-between mobile:justify-normal mobile:gap-4 mobile:h-auto">
            <div>
              <h2 className="font-bold text-3xl">{currentPaint?.title}</h2>
              <p className="font-bold mt-3 mobile:mt-0 text-[#bfbdbd]">
                &#x20ac;{currentPaint?.price}
              </p>
              {/* <span className="text-sm">Tax included.</span> */}
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
              <div>
                <p>{currentPaint?.paintingType} </p>
                <p>
                  Size: {currentPaint?.sizes.width} W x{" "}
                  {currentPaint?.sizes.height} H x {currentPaint?.sizes.d} D cm
                </p>
                <p>Ships in a Box</p>
              </div>
              <button className="border border-black w-full py-4 text-[18px] hover:bg-slate-900 hover:text-white transition duration-500 ease-in-out self-end">
                I want to buy it
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaintingDetail;
