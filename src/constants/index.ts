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
  currency: "EUR" | "EUR";
  description: string | string[];
  sizes: Size;
  paintingType: string;
  title: string;
  year: number;
}

export const PAINTINGS: Array<IPainting> = [
  {
    id: 1,
    mainImage: "/paintings/111/1+11.JPG",
    images: [
      {
        id: 3,
        src: "/paintings/111/1+11.JPG",
      },
      {
        id: 2,
        src: "/paintings/111/main.JPG",
      },
      {
        id: 1,
        src: "/paintings/111/1+11_1.JPG",
      },
    ],
    price: 35670,
    currency: "EUR",
    description:
      "1+11=111 is an original Minzu Dem oil on canvas painting in soothing bright pastel colors. It conveys the essence of flame hearts, when souls are the same, creating a new world of love and balance.",
    sizes: {
      width: 105,
      height: 119,
      d: 2.5,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "1+11=111",
    year: 2023,
  },
  {
    id: 2,
    price: 12340,
    currency: "EUR",
    description:
      "The painting is painted in oil on canvas. Over time, people who saw the paintings always wondered, is this cat flying in the sky, swimming in the sea or just dancing? what do you think? what will be your choice?",
    sizes: {
      width: 105,
      height: 177,
      d: 3,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Happy",
    mainImage: "/paintings/Happy/happy.JPG",
    images: [
      {
        id: 4,
        src: "/paintings/Happy/happy.JPG",
      },
      {
        id: 1,
        src: "/paintings/Happy/happy2.JPG",
      },
      {
        id: 2,
        src: "/paintings/Happy/happy3.JPG",
      },
      {
        id: 3,
        src: "/paintings/Happy/happy4.JPG",
      },
    ],
    year: 2023,
  },

  {
    id: 15,
    mainImage: "/paintings/AncientBlue/ancient-blue.JPG",
    images: [
      {
        id: 4,
        src: "/paintings/AncientBlue/ancient-blue.JPG",
      },
      {
        id: 1,
        src: "/paintings/AncientBlue/ancient-blue2.JPG",
      },
      {
        id: 2,
        src: "/paintings/AncientBlue/ancient-blue3.JPG",
      },
      {
        id: 3,
        src: "/paintings/AncientBlue/ancient-blue4.JPG",
      },
      {
        id: 5,
        src: "/paintings/AncientBlue/ancient-blue5.JPG",
      },
    ],
    price: 7655,
    currency: "EUR",
    description: [
      "Ancient Blue is an original Minzu Dem oil on canvas painting in soothing bright pastel colors. An abstract expressionist painting in which layers of thick paint are applied with brushes and other tools. It captures the essence of the ocean, sun and fields, merging into a soothing sense of peace that delights the senses and soothes the mind.",
    ],
    sizes: {
      width: 100,
      height: 150,
      d: 3,
    },
    paintingType: "Oil on canvas",
    title: "Ancient Blue",
    year: 2023,
  },
  {
    id: 6,
    mainImage: "/paintings/Freedom/freedom.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Freedom/freedom.JPG",
      },
      {
        id: 2,
        src: "/paintings/Freedom/freedom2.JPG",
      },
      {
        id: 3,
        src: "/paintings/Freedom/freedom3.JPG",
      },
      {
        id: 4,
        src: "/paintings/Freedom/freedom4.JPG",
      },
      {
        id: 5,
        src: "/paintings/Freedom/freedom5.JPG",
      },
      {
        id: 6,
        src: "/paintings/Freedom/freedom6.JPG",
      },
    ],
    price: 16880,
    currency: "EUR",
    description:
      "This painting is about how important it is to know your roots, your history, because even a small branch can break all the frames that you have built or accepted. ",
    sizes: {
      width: 100,
      height: 150,
      d: 3,
    },
    paintingType: "Oil, acrylic, pastel on canvas",
    title: "Branch of Freedom",
    year: 2022,
  },
  {
    id: 8,
    mainImage: "/paintings/Doors/doors.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Doors/doors.JPG",
      },
      {
        id: 2,
        src: "/paintings/Doors/doors2.JPG",
      },
    ],
    price: 999,
    currency: "EUR",
    description:
      "The painting was painted with acrylic paints on canvas, the painting came to the author in a dream, it looked like different forms of energy and in the form of doors of different colors, the author believes that by opening one main door, you gain access to all the others, the work was written in 2021 on the shore of Lake Issyk -Kul.",
    sizes: {
      width: 60,
      height: 90,
      d: 2,
    },
    paintingType: "Painting, Acrylic on Canvas",
    title: "Doors",
    year: 2021,
  },
  {
    id: 7,
    mainImage: "/paintings/Kernel/kernel.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Kernel/kernel.JPG",
      },
      {
        id: 2,
        src: "/paintings/Kernel/kernel2.JPG",
      },
      {
        id: 3,
        src: "/paintings/Kernel/kernel3.JPG",
      },
      {
        id: 4,
        src: "/paintings/Kernel/kernel4.JPG",
      },
      {
        id: 5,
        src: "/paintings/Kernel/kernel5.JPG",
      },
    ],
    price: 9500,
    currency: "EUR",
    description:
      "In this painting, a woman is depicted embracing the entire planet in her hands. Her pregnant body expresses tenderness and care. The artist conveyed his state after a trip to the mountains - he is full of energy, inspiration, and ready to share his love with the whole world. The painting is filled with bright colors and positive energy that makes the viewer feel joy and gratitude for this beautiful world.",
    sizes: {
      width: 65,
      height: 80,
      d: 2.5,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Holding the whole planet",
    year: 2023,
  },
  {
    id: 5,
    mainImage: "/paintings/AbstractImage/abstract-img.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/AbstractImage/abstract-img.JPG",
      },
      {
        id: 2,
        src: "/paintings/AbstractImage/abstract-img2.JPG",
      },
      {
        id: 3,
        src: "/paintings/AbstractImage/abstract-img3.JPG",
      },
      {
        id: 4,
        src: "/paintings/AbstractImage/abstract-img2.JPG",
      },
    ],
    price: 4320,
    currency: "EUR",
    description:
      "The painting is an abstract image consisting of different colors and shapes. In a painting you can see conflict and roughness, but still find one direction. The author used oil to create this painting on canvas.",
    sizes: {
      width: 60,
      height: 80,
      d: 3,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Untitled 2",
    year: 2023,
  },
  {
    id: 3,
    mainImage: "/paintings/Light/light.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Light/light.JPG",
      },
      {
        id: 2,
        src: "/paintings/Light/light2.JPG",
      },
      {
        id: 3,
        src: "/paintings/Light/light3.JPG",
      },
    ],
    price: 4725,
    currency: "EUR",
    description: [
      "The painting 'Darkness always gives spaces for light' is an abstract image consisting of two primary colors - white and red. Red color occupies about 90 percent of the canvas surface. The title of the painting refers to the theme of the battle between darkness and light. Despite the dominance of red, the forces of light are expressed in such a way that everything becomes clear: light wins.",
      "The author of the picture is surprised that viewers always interpret it as a victory of light. This indicates that the forces of light always prevail in this struggle. The visual depiction of the battle between darkness and light creates a tense and dynamic atmosphere, making the viewer think about the eternal struggle between these two opposites.",
    ],
    sizes: {
      width: 84,
      height: 105,
      d: 2.5,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Darkness all ways gives space for light",
    year: 2023,
  },
  {
    id: 10,
    mainImage: "/paintings/AbstractPatterns/abstract-patterns.JPG",
    images: [
      {
        id: 2,
        src: "/paintings/AbstractPatterns/abstract-patterns.JPG",
      },
      {
        id: 1,
        src: "/paintings/AbstractPatterns/abstract-patterns3.JPG",
      },
      {
        id: 3,
        src: "/paintings/AbstractPatterns/abstract-patterns2.JPG",
      },
      {
        id: 4,
        src: "/paintings/AbstractPatterns/abstract-patterns4.JPG",
      },
      {
        id: 5,
        src: "/paintings/AbstractPatterns/abstract-patterns2.JPG",
      },
    ],
    price: 1660,
    currency: "EUR",
    description: [
      "The painting consists of three separate parts, each showcasing intricate and colorful abstract patterns. The overall style is abstract, with a mix of bold and vibrant colors. The painting also features ethnic patterns and motifs, adding depth and cultural significance to the artwork. The use of geometric shapes and lines creates a sense of movement and energy within the composition. Overall, the painting is a beautiful blend of abstraction and ethnic influences, creating a visually captivating piece of art.",
    ],
    sizes: {
      width: 33,
      height: 97,
      d: 2.5,
    },
    paintingType: "Pastel on Canvas",
    title: "Untitled 3",
    year: 2022,
  },
  {
    id: 4,
    mainImage: "/paintings/Vedmerd/vedmerd.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Vedmerd/vedmerd.JPG",
      },
      {
        id: 2,
        src: "/paintings/Vedmerd/vedmerd2.JPG",
      },
      {
        id: 3,
        src: "/paintings/Vedmerd/vedmerd3.JPG",
      },
    ],
    price: 6795,
    currency: "EUR",
    description: [
      'The painting "Vedmerd" is a portrait of a young girl radiating wisdom and deep thoughts. The author used oil and acrylic to create this painting on canvas in order to convey its unique energy and beauty.',
      "Over the course of two years, from 2021 to 2023, the author was inspired by this girl and her amazing wisdom, trying to capture her on canvas. Every brushstroke was imbued with attention to detail in order to convey the depth of her soul.",
      "When the author met this girl again after completing the painting, he was amazed at how much she corresponded to his idea of her. His heart was filled with joy, seeing that he was able to convey her wisdom and beauty on canvas.",
      '"Vedmerd" became not just a painting, but a story of meeting an amazing soul that will remain in the author`s heart forever.2023',
    ],
    sizes: {
      width: 80,
      height: 80,
      d: 2.5,
    },
    paintingType: "Painting, Acrylic on Canvas",
    title: "Vedmerd",
    year: 2023,
  },
  {
    id: 12,
    mainImage: "/paintings/Cheer/cheer.JPG",
    images: [
      {
        id: 2,
        src: "/paintings/Cheer/cheer.JPG",
      },
      {
        id: 1,
        src: "/paintings/Cheer/cheer2.JPG",
      },
      {
        id: 3,
        src: "/paintings/Cheer/cheer3.JPG",
      },
      {
        id: 4,
        src: "/paintings/Cheer/cheer4.JPG",
      },
      {
        id: 5,
        src: "/paintings/Cheer/cheer5.JPG",
      },
      {
        id: 6,
        src: "/paintings/Cheer/cheer6.JPG",
      },
    ],
    price: 9550,
    currency: "EUR",
    description: [
      "I remember that when I painted this picture, my hands moved on their own, everything happened so quickly, I painted with pastels and then such a strong feeling of freedom came, such a strong joy and it was so bright and I thought about childhood, when such a state was commonplace for me. I started it in 2022, and finished it in March 2023; it had three stages of development. I really want this painting to share the same bright feelings with the new owner, so that it adds more brightness to the space.",
    ],
    sizes: {
      width: 90,
      height: 150,
      d: 3,
    },
    paintingType: "Oil, Pastel on canvas",
    title: "Cheer",
    year: 2023,
  },
  {
    id: 11,
    mainImage: "/paintings/Roots/roots.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/Roots/roots.JPG",
      },
      {
        id: 6,
        src: "/paintings/Roots/roots2.JPG",
      },
      {
        id: 2,
        src: "/paintings/Roots/roots3.JPG",
      },
      {
        id: 3,
        src: "/paintings/Roots/roots4.JPG",
      },
      {
        id: 4,
        src: "/paintings/Roots/roots5.JPG",
      },
      {
        id: 5,
        src: "/paintings/Roots/roots3.JPG",
      },
    ],
    price: 5000,
    currency: "EUR",
    description: [
      "The painting, created in 2022 with oil on canvas, contains cultural symbols reflecting the artist's personality and heritage. The author may have used these symbols to express their originality and connection to a specific culture. The self-portrait may be a way for the artist to show their inner state and relationship to their own culture. The painting represents a moment in the artist's life when they were exploring their identity and cultural background.",
    ],
    sizes: {
      width: 57,
      height: 69,
      d: 2,
    },
    paintingType: "Oil, Charcoal, Pastel on canvas",
    title: "Roots",
    year: 2022,
  },

  {
    id: 9,
    mainImage: "/paintings/KyrgyzShaman/kg_shaman.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/KyrgyzShaman/kg_shaman.JPG",
      },
      {
        id: 2,
        src: "/paintings/KyrgyzShaman/kg_shaman2.JPG",
      },
      {
        id: 3,
        src: "/paintings/KyrgyzShaman/kg_shaman3.JPG",
      },
      {
        id: 4,
        src: "/paintings/KyrgyzShaman/kg_shaman4.JPG",
      },
    ],
    price: 12680,
    currency: "EUR",
    description: [
      "The painting is a beautiful representation of spiritual wisdom and inner vision. The creature depicted in the painting seems to possess a deep understanding of the universe and the ability to navigate through different realms. The use of the third eye symbolizes insight and intuition, while the large hands-wings suggest the power to create and fly freely. The headdress adds a touch of mysticism, hinting at the creature's connection to higher energies.",
      "Overall, the painting evokes a sense of enlightenment and spiritual growth, encouraging the viewer to seek wisdom and inner guidance. It serves as a reminder to trust one's intuition and embrace personal development. The elements of the sun on the creature's chest further emphasize the idea of enlightenment and illumination.",
      "In conclusion, this painting is a powerful symbol of wisdom and spiritual evolution, inviting the viewer to explore their inner vision and embrace their journey towards enlightenment.",
    ],
    sizes: {
      width: 100,
      height: 150,
      d: 3,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Kyrgyz Shaman",
    year: 2023,
  },
  {
    id: 14,
    mainImage: "/paintings/MotherDeer/mother deer.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/MotherDeer/mother deer.JPG",
      },
      {
        id: 2,
        src: "/paintings/MotherDeer/mother deer2.JPG",
      },
      {
        id: 3,
        src: "/paintings/MotherDeer/mother deer3.JPG",
      },
      {
        id: 4,
        src: "/paintings/MotherDeer/mother deer4.JPG",
      },
      {
        id: 5,
        src: "/paintings/MotherDeer/mother deer5.JPG",
      },
    ],
    price: 3560,
    currency: "EUR",
    description: [
      "The painting depicts a mother deer divided into several parts. The artist used oil paints to create bright and rich colors. The painting was painted in 2022.",
    ],
    sizes: {
      width: 95,
      height: 102,
      d: 3,
    },
    paintingType: "Oil on canvas",
    title: "Untitled 5",
    year: 2022,
  },
  {
    id: 13,
    mainImage: "/paintings/OilOnCanvas/OilOnCanvas.JPG",
    images: [
      {
        id: 1,
        src: "/paintings/OilOnCanvas/OilOnCanvas.JPG",
      },
      {
        id: 2,
        src: "/paintings/OilOnCanvas/OilOnCanvas2.JPG",
      },
      {
        id: 4,
        src: "/paintings/OilOnCanvas/OilOnCanvas3.JPG",
      },
      {
        id: 3,
        src: "/paintings/OilOnCanvas/OilOnCanvas4.JPG",
      },
    ],
    price: 2300,
    currency: "EUR",
    description: [
      "In Kyrgyz culture there are sunny people carved on stones, I was inspired by them, and then, as usual, my hands did all the work themselves. It was after this picture that I began to develop a deep interest in my culture, because it contains so much wisdom and beauty",
    ],
    sizes: {
      width: 90,
      height: 90,
      d: 2.5,
    },
    paintingType: "Oil on canvas",
    title: "Untitled",
    year: 2022,
  },
  // {
  //   id: 17,
  //   mainImage: "/paintings/AndyWarhol/1.JPG",
  //   images: [
  //     {
  //       id: 7,
  //       src: "/paintings/AndyWarhol/1.JPG",
  //     },
  //     {
  //       id: 1,
  //       src: "/paintings/AndyWarhol/AndyWarhol.JPG",
  //     },
  //     {
  //       id: 4,
  //       src: "/paintings/AndyWarhol/AndyWarhol1.JPG",
  //     },
  //     {
  //       id: 3,
  //       src: "/paintings/AndyWarhol/AndyWarhol2.JPG",
  //     },
  //   ],
  //   price: 192887,
  //   currency: "EUR",
  //   description: [
  //     "The painting 'Andy Warhol on the wall' was created using oil paints on canvas. The author was struck by the very empty expression on a wall and decided to capture it on canvas. Almost every viewer, when looking at the painting, begins to feel a wild fear and emptiness, and the author is no exception. Even during the photo shoot, he became scared and wanted to finish it as quickly as possible.",
  //   ],
  //   sizes: {
  //     width: 60,
  //     height: 75,
  //     d: 2.5,
  //   },
  //   paintingType: "Oil on canvas",
  //   title: "Andy Warhol on the wall",
  //   year: 2022,
  // },
];
