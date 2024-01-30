import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPainting } from "src/constants";

const PaintingCard = ({ mainImage, year, sizes, title, id }: IPainting) => {
  const { d, width, height } = sizes;
  return (
    <div className="w-[256px] mobile:w-[140px] mobile:h-auto flex flex-col gap-2">
      <Link className="relative group" href={`/pages/painting-detail/${id}`}>
        <Image
          className="mobile:w-[140px] max-h-[320px]"
          src={mainImage}
          alt="untitled 5"
          width={320}
          height={420}
        />
        <div className="absolute inset-0 bg-white bg-opacity-30 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"></div>
      </Link>
      <div className="flex justify-center items-center mobile:flex-col ">
        <div className="flex flex-col items-center">
          <p className="text-[17px] text-paint-title text-center mobile:text-sm">
            {title}, {year}
          </p>
          <p className="text-xs text-paint-desc">
            {width} W x {height} H x {d} D cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaintingCard;
