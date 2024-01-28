"use client";
import { Metadata } from "next";
import React, { useEffect, useMemo } from "react";
import PaintingCard from "src/components/PaintingCard";
import { PAINTINGS } from "src/constants";
import { sendPaintRequest } from "src/services/email";

// export const metadata: Metadata = {
//   title: "Minzu Dem | Paintings",
// };
const Paintings = () => {
  const renderPaintings = useMemo(
    () => PAINTINGS.map((paint) => <PaintingCard key={paint.id} {...paint} />),
    [PAINTINGS]
  );
  // useEffect(() => {
  //   sendPaintRequest(
  //     {
  //       from_name: "Kairat",
  //       from_email: "mail.com@mais",
  //       message: "hello test message",
  //     },
  //     () => {}
  //   );
  //   console.log("asdasd");
  // }, []);
  return (
    <section className="container">
      <section className="flex gap-8 justify-center flex-wrap mt-[75px] mobile:mt-[40px]">
        {renderPaintings}
      </section>
    </section>
  );
};

export default Paintings;
