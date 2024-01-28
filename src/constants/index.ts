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
}

export const PAINTINGS: Array<IPainting> = [
  {
    id: 7,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11134567/10196843-GHXOZZWC-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134567/10196843-GHXOZZWC-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134567/additional_7f6a8e3b1b4ad3c1dff5126e40532922c33ce084-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134567/additional_b928355e09758ba3f92b9dd99c473e71c780795b-AICC2-7.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134567/additional_3ff92c48576ff1dde1e3c6c3fa971d6f2b4b92b7-AICC2-7.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134567/additional_c9ef6f2cab60b3d062c381309336e1e6ac0cb0e4-AICC2-7.jpg",
      },
    ],
    price: 14500,
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
  },
  {
    id: 5,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11119517/10181793-BPBFEIXX-6.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119517/10181793-BPBFEIXX-6.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119517/additional_4294e0c7da87a94477f2ca38c2184a734343596e-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119517/additional_2ee4db0ebf8c1b0ea2fc8b6a96cbc2ece82ac211-AICC2-7.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119517/additional_64a02f2de8101db1afb00c2690c3c82b31cfbefe-AICC2-7.jpg",
      },
    ],
    price: 5450,
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
  },
  {
    id: 15,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_30e13c781d4ff28b2af18ec2e8c55c41c1243e13-AICC2-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_60dec5969e61d4856a6da24fc09f14c2fdfdec45-AICC2-8.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_56ee3e2b0458a8817e1bb3ecb5bc4dc3329972f3-AICC2-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_8bcaf04c25063b919ac0142c390dc556c07e1b0e-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_30e13c781d4ff28b2af18ec2e8c55c41c1243e13-AICC2-8.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138319/additional_8d5b859eeb28a816308748c00e01a57eba4e11e0-AICC2-8.jpg  ",
      },
    ],
    price: 17665,
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
  },
  {
    id: 8,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11119461/10181737-UHEUQZOS-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119461/10181737-UHEUQZOS-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119461/additional_f18096be635c8fc007a774d4b872ecfd19ae051f-AICC2-7.jpg",
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
  },

  {
    id: 1,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11138819/10201095-GWMFPTNP-7.jpg",
    images: [
      {
        id: 2,
        src: "/paintings/111/main.JPG",
      },
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138819/additional_59f12d4698ac8c2dde576c4c4714c5c7140bf387-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11138819/10201095-GWMFPTNP-7.jpg",
      },
    ],
    price: 100000,
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
  },
  {
    id: 3,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11119233/10181509-HQVUHYLR-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119233/10181509-HQVUHYLR-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119233/additional_569d9636f9d70a6ab2810b2c8d2224ceb3bb22ce-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11119233/additional_ce6722cac617778721cadec7407c47619e751d52-AICC2-7.jpg",
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
    title: "Darkness all ways gives space for light Painting",
  },
  {
    id: 10,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11117595/10179871-BPZFRBKG-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_ab68c37004de0f064a22d61385d79c849b9abc20-AICC2-8.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/10179871-BPZFRBKG-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_d0e4e9b5fa207b4929f5d0380c4d5d53ec80ca86-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_49006c7b218bf58ec987254b98cfcf98c4c0d37d-AICC2-8.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_c335e97d39e448276f71288d3ff9216f8190b9f1-AICC2-8.jpg",
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
  },
  {
    id: 6,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11098139/10160419-LHDVNIGA-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11098139/10160419-LHDVNIGA-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11098139/additional_981004bc558c7642a7aab44f9a08c7f8e8ad7e5f-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11098139/additional_f07e2df4ddd91ae916ebe4742b5b6b7e4c946ab2-AICC2-7.jpg",
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
  },
  {
    id: 4,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11124609/10186885-XGVAQZCN-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11124609/10186885-XGVAQZCN-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11124609/additional_205f573b69554161a072e8366ed7fa9125e19cf6-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11124609/additional_1824aeb5338d043ea3c3224d0191d7b2838f442f-AICC2-7.jpg",
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
  },

  {
    id: 2,
    price: 55000,
    currency: "EUR",
    description:
      "The painting is painted in oil on canvas. Over time, people who saw the paintings always wondered, is this cat flying in the sky, swimming in the sea or just dancing? what do you think? what will be your choice?",
    sizes: {
      width: 105,
      height: 177,
      d: 3,
    },
    paintingType: "Painting, Oil on Canvas",
    title: "Happy 2023.",
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11134919/10197195-CIQVQUHU-6.jpg",
    images: [
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134919/10197195-CIQVQUHU-6.jpg",
      },
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134919/additional_2e10ac2c9cfca5b5c11b528cfbe33e77f6b6b28b-AICC2-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134919/additional_1b9a3c29a964ef7a1e5c0d9d944767ed361adc64-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134919/additional_685d358bd6d200218a3e5bf520dc7a5ca75cb091-AICC2-7.jpg",
      },
    ],
  },
  {
    id: 12,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11080629/10142909-MYWDAKZL-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/additional_816d142dd8e66743cc625a317d09ad49425bd53b-AICC2-8.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/10142909-MYWDAKZL-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/additional_f2fe0e30ea1f6732cf2956b3d3e3b8ebf36d6dfa-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/additional_d51ee366c80a02f203b9b8be16e05efcf35ffa61-AICC2-8.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/additional_937655c5d40c9c8ffb1aab100bcfaeb288350d68-AICC2-8.jpg",
      },
      {
        id: 6,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11080629/additional_338918fca083aed30bbc6d1d7ae1b1a025d188de-AICC2-8.jpg  ",
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
  },
  {
    id: 11,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11134337/additional_57ca1fb9ab41fa1dc39926c11040ed8184b2d1ae-AICC2-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134337/additional_99225dab29c9ecb7a1905a1dc3842d936cfb4c68-AICC2-8.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134337/additional_fac486567dfe926dd808c3356b43b88e9dde5b11-AICC2-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11134337/additional_57ca1fb9ab41fa1dc39926c11040ed8184b2d1ae-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_49006c7b218bf58ec987254b98cfcf98c4c0d37d-AICC2-8.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11117595/additional_c335e97d39e448276f71288d3ff9216f8190b9f1-AICC2-8.jpg",
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
  },

  {
    id: 9,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11101501/10163781-GHPOKQLR-7.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11101501/10163781-GHPOKQLR-7.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11101501/additional_be89e9d93d59c26169e21d317c2179c2809b7058-AICC2-7.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11101501/additional_239a528a53e8c475cce0dadd8243de85cc025158-AICC2-7.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11101501/additional_ef07364a172a19d27746bea1733dec358883845b-AICC2-7.jpg",
      },
      {
        id: 5,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11101501/additional_6bfc9a0e89f5c21f134583c29279383e89b9a26d-AICC2-7.jpg",
      },
    ],
    price: 4725,
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
    title: "Kyrgyz Shaman, 2022",
  },
  {
    id: 14,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11135249/10197525-FQAYVECL-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11135249/additional_b8528990da78fbdb76356abd073ed8a34e71e50e-AICC2-8.jpg",
      },
      {
        id: 2,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11135249/10197525-FQAYVECL-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11135249/additional_ccf17a47fcf0a1ddfd19a566105ff1933db4f489-AICC2-8.jpg",
      },
    ],
    price: 7550,
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
  },
  {
    id: 13,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11099433/10161713-UCQZXUNG-8.jpg",
    images: [
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11099433/additional_7f22742bd9f0e9c3a9819843e6bacb5f0be64b9c-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11099433/10161713-UCQZXUNG-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11099433/additional_467d9dc5b8a51f274c8c503edce72d469e6dd313-AICC2-8.jpg",
      },
    ],
    price: 3974,
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
  },
  {
    id: 17,
    mainImage:
      "https://images.saatchiart.com/saatchi/2336329/art/11125137/10187413-IIZNLQPJ-7.jpg",
    images: [
      {
        id: 7,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11125137/10187413-IIZNLQPJ-7.jpg",
      },
      {
        id: 1,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11125137/additional_60a6601147291fa853aeb63544df54d97c792ca0-AICC2-8.jpg",
      },
      {
        id: 4,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11125137/additional_8508b0badff8d210c94bf53df37ea84ca9a1cca0-AICC2-8.jpg",
      },
      {
        id: 3,
        src: "https://images.saatchiart.com/saatchi/2336329/art/11125137/additional_0f52a7a4224b20a8d655a9e212aea5e07c88a184-AICC2-8.jpg",
      },
    ],
    price: 192887,
    currency: "EUR",
    description: [
      "The painting 'Andy Warhol on the wall' was created using oil paints on canvas. The author was struck by the very empty expression on a wall and decided to capture it on canvas. Almost every viewer, when looking at the painting, begins to feel a wild fear and emptiness, and the author is no exception. Even during the photo shoot, he became scared and wanted to finish it as quickly as possible.",
    ],
    sizes: {
      width: 60,
      height: 75,
      d: 2.5,
    },
    paintingType: "Oil on canvas",
    title: "Andy Warhol on the wall",
  },
];
