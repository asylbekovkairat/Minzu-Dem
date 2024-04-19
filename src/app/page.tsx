"use client";
import { Metadata } from "next";
import React, { useEffect, useMemo, useState } from "react";
import PaintingCard from "src/components/PaintingCard";
import { PAINTINGS } from "src/constants";

const Paintings = () => {
  const renderPaintings = useMemo(
    () =>
      PAINTINGS.map((paint, index) => (
        <PaintingCard key={`${paint.id}-${index}-${paint.title}`} {...paint} />
      )),
    [PAINTINGS]
  );
  return (
    <section className="container">
      <section className="flex gap-8 justify-center flex-wrap mt-[75px] mobile:mt-[40px]">
        {renderPaintings}
      </section>
    </section>
  );
};

export default Paintings;
