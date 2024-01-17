import Head from "next/head";
import React, { useMemo } from "react";
import PaintingCard from "src/components/PaintingCard";
import { PAINTINGS } from "src/constants";

const Paintings = () => {
  const renderPaintings = useMemo(
    () => PAINTINGS.map((paint) => <PaintingCard key={paint.id} {...paint} />),
    [PAINTINGS]
  );
  return (
    <>
      <Head>
        <title>Minzu Dem | Paintings</title>
      </Head>
      <section className="flex gap-3 flex-wrap justify-between mt-10">
        {renderPaintings}
      </section>
    </>
  );
};

export default Paintings;
