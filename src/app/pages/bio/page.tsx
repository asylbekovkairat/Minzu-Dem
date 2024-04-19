import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Minzu Dem | Bio",
};

const Bio = () => {
  
  return (
    <div className="container">
      <section className="flex gap-12 mt-[75px] mobile:flex-col-reverse mobile:mt-11 mobile:mb-20">
        <div className="flex flex-col gap-6 text-lg mb-7">
          <p>
            Minzu (b. 1998) is a burgeoning artist dedicated to the genre of
            abstractionism. He perceives his canvases as sentient entities,
            capable of eliciting emotions and exerting influence on their
            surrounding environment. His artistic creations serve as a
            reflection of his innermost thoughts and emotions, with the
            aspiration that they may serve as a source of healing and
            inspiration for those who engage with them.
          </p>
          <p>
            The artist's paintings are currently housed in private collections
            and art galleries. His overarching goal is to craft pieces that
            resonate deeply with viewers.
          </p>
          <p>
            In his pursuit of artistic excellence, Minzu engages in
            experimentation with various techniques and materials to attain the
            desired effects in his works. Through manipulation of light, shadow,
            colors, and textures, he skillfully constructs dynamic and enigmatic
            compositions intended to captivate the interest and admiration of
            spectators.
          </p>
          <p>Lives and works in Bishkek, Kyrgyzstan.</p>
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
    </div>
  );
};

export default Bio;
