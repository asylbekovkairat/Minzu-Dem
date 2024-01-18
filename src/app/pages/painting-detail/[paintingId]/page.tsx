"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IPainting, PAINTINGS } from "src/constants";

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

  return (
    <main className="flex items-start">
      <section className="w-1/2">
        <div className="relative w-full h-[500px] flex justify-center pr-7">
          <img className="h-full" src={imageToShow} alt="" />
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {currentPaint?.images.map(({ src, id }) => (
            <Image
              key={id}
              src={src}
              alt="untitled 5"
              width={150}
              height={200}
              onClick={() => setImageToShow(src)}
            />
          ))}
        </div>
      </section>
      <section className="w-1/2">
        <div className="h-[500px] flex flex-col gap-3 items-start justify-between">
          <div>
            <h2 className="font-bold text-3xl">{currentPaint?.title}</h2>
            <p className="font-bold mt-3">
              {currentPaint?.currency} {currentPaint?.price}
            </p>
            <span className="text-sm">Tax included.</span>
          </div>

          <div className="flex flex-col gap-4">
            <p>{currentPaint?.description}</p>
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
  );
};

export default PaintingDetail;
