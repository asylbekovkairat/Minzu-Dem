type Image = {
  id: number;
  src: string;
};

type Size = {
  width: number;
  height: number;
  d: number;
};

export interface IPainting {
  id: number;
  mainImage: string;
  images: Array<Image>;
  price: number;
  currency: "USD" | "EUR";
  description: string;
  sizes: Size;
  paintingType: string;
  title: string;
}

export const PAINTINGS: Array<IPainting> = [
  {
    id: 1,
    mainImage: "/paintings/111/main.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/111/secondary1.JPG",
      },
    ],
    price: 99999,
    currency: "USD",
    description:
      "I remember that when I painted this picture, my hands moved on their own, everything happened so quickly, I painted with pastels and then such a strong feeling of freedom came, such a strong joy and it was so bright and I thought about childhood, when such a state was commonplace for me. I started it in 2022, and finished it in March 2023; it had three stages of development. I really want this painting to share the same bright feelings with the new owner, so that it adds more brightness to the space.",
    sizes: {
      width: 100,
      height: 200,
      d: 20,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "1+11=111 Painting",
  },
  {
    id: 2,
    mainImage: "/paintings/111/main.JPG",
    images: [
      {
        id: 2,
        src: "/paintings/111/secondary1.JPG",
      },
    ],
    price: 99999,
    currency: "USD",
    description:
      "I remember that when I painted this picture, my hands moved on their own, everything happened so quickly, I painted with pastels and then such a strong feeling of freedom came, such a strong joy and it was so bright and I thought about childhood, when such a state was commonplace for me. I started it in 2022, and finished it in March 2023; it had three stages of development. I really want this painting to share the same bright feelings with the new owner, so that it adds more brightness to the space.",
    sizes: {
      width: 100,
      height: 200,
      d: 20,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "1+11=111 Painting",
  },
  {
    id: 3,
    mainImage: "/paintings/111/main.JPG",
    images: [
      {
        id: 3,
        src: "/paintings/111/secondary1.JPG",
      },
    ],
    price: 99999,
    currency: "USD",
    description:
      "I remember that when I painted this picture, my hands moved on their own, everything happened so quickly, I painted with pastels and then such a strong feeling of freedom came, such a strong joy and it was so bright and I thought about childhood, when such a state was commonplace for me. I started it in 2022, and finished it in March 2023; it had three stages of development. I really want this painting to share the same bright feelings with the new owner, so that it adds more brightness to the space.",
    sizes: {
      width: 100,
      height: 200,
      d: 20,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "1+11=111 Painting",
  },
];
