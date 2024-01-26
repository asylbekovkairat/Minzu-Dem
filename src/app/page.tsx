import { Metadata } from "next";
import React, { useMemo } from "react";
import PaintingCard from "src/components/PaintingCard";
import { PAINTINGS } from "src/constants";

export const metadata: Metadata = {
  title: "Minzu Dem | Paintings",
};
const Paintings = () => {
  const renderPaintings = useMemo(
    () => PAINTINGS.map((paint) => <PaintingCard key={paint.id} {...paint} />),
    [PAINTINGS]
  );
  return (
    <>
      <section className="container flex gap-8 justify-center flex-wrap mt-10 mobile:mt-[40px]">
        {renderPaintings}
      </section>
    </>
  );
};

export default Paintings;
