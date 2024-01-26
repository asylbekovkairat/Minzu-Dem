import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Minzu Dem | Bio",
};

const Bio = () => {
  return (
    <section className="container flex gap-12 mobile:flex-col-reverse mobile:mt-11 mobile:mb-20">
    <div className="flex flex-col gap-6 text-lg mb-7">
        <p>
          A young artist working in the style of abstractionism, he possesses
          incredible talent and passion for his art. He sees his paintings as
          living beings, capable of evoking emotions and influencing the
          surrounding space. His works reflect his inner world, his emotions and
          thoughts, and he hopes that they can heal and inspire people.
        </p>
        <p>
          His paintings are in beautiful homes, private collections, and
          galleries. He strives to create works that will have a deep emotional
          impact on viewers and leave an indelible mark on their hearts.
        </p>
        <p>
          This young artist experiments with different techniques and materials
          to achieve the desired effect in his works. He plays with light,
          shadow, colors, and textures to create dynamic and mysterious
          compositions that will pique the interest and admiration of viewers.
        </p>
      </div>
      <div className="w-full">
        <Image
          src="/userPhoto.HEIC"
          alt="user photo"
          width={1500}
          height={1700}
        />
      </div>
    </section>
  );
};

export default Bio;
