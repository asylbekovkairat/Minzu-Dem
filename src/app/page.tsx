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
      <section className="flex gap-6 justify-center flex-wrap mt-10">
        {renderPaintings}
      </section>
    </>
  );
};

export default Paintings;
