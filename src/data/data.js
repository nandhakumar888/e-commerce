const shoes = [
  {
    id: 1,
    title: "Sports Star Dhoni",
    image:
      "https://m.media-amazon.com/images/I/51JKJ8ANWlS._SX323_BO1,204,203,200_.jpg",
    description:
      "Mahendra Singh Dhoni commonly known as MS Dhoni, is a former Indian cricketer and captain of the Indian national team",
    price: 175,
    originalPrize: 249,
    offers: "18% offer",
    rating: 4.9,
    category: "Sports",
  },
  {
    id: 2,
    title: "Sports Star Virat",
    image:
      "https://m.media-amazon.com/images/I/51EmjDvab0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "Virat Kohli is an Indian international cricketer and the former captain of the India national team who plays as a right-handed batsman",
    price: 239,
    originalPrize: 759,
    offers: "11% offer",
    rating: 4.9,

    category: "Sports",
  },
  {
    id: 3,
    title: "Sports Star Sachin",
    image:
      "https://m.media-amazon.com/images/I/41PrmmLat4L._SX324_BO1,204,203,200_.jpg",
    description:
      "Sachin Tendulkar was the most complete batter of his time, the most prolific run-maker of all time, and arguably the biggest cricket icon the game has ever ...",
    price: 209,
    originalPrize: 439,
    offers: "22% offer",
    rating: 4.8,

    category: "Sports",
  },
  {
    id: 4,
    title: "Sports Star Raina",
    image:
      "https://m.media-amazon.com/images/I/41ApiDTP6LL._SX323_BO1,204,203,200_.jpg",
    description:
      "Suresh Raina represented the new-age Indian cricketer: An attacking left-hander who went for the big shots with impunity and cleared the field with a ...",
    price: 149,
    originalPrize: 275,
    offers: "13% offer",
    rating: 4.2,

    category: "Sports",
  },
  {
    id: 5,
    title: "Cricket",
    image:
      "https://m.media-amazon.com/images/I/41tQVNg9PHL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "Get live cricket scores, cricket updates of upcoming International, domestic and T20 matches. ",
    price: 140,
    originalPrize: 334,
    offers: "22% offer",
    rating: 4.7,

    category: "Sports",
  },
  {
    id: 6,
    title: "Cricket Bat And Ball",
    image:
      "https://m.media-amazon.com/images/I/71ZiffT30uL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Whether elite athletes are racing or training, they look to Zoom Air for a fast, responsive ride and that snappy, quick-off-the-ground feel that helps optimise their quest for speed.",
    price: 129,
    originalPrize: 244,
    offers: "15% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 7,
    title: "Abdul Kalam",
    image:
      "https://m.media-amazon.com/images/I/81TWV2oFfiL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007.",
    price: 700,
    originalPrize: 1499,
    offers: "24% offer",
    rating: 4.7,
    category: "Education",
  },
  {
    id: 8,
    title: "Gandhi",
    image:
      "https://m.media-amazon.com/images/I/81XqXdOE5mS._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist famous for his nonviolent resistance.",
    price: 349,
    originalPrize: 649,
    offers: "29% offer",
    rating: 4.9,

    category: "Education",
  },
  {
    id: 9,
    title: "Messi and Ronaldo",
    image:
      "https://m.media-amazon.com/images/I/91WodK2HFlL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "While Ronaldo currently has more goals overall, Messi has the edge in the scoring department, with a higher season average (37.9 to 35), having ...",
    price: 159,
    originalPrize: 223,
    offers: "10% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 10,
    title: "Teaching",
    image:
      "https://m.media-amazon.com/images/I/61caxIyYp+L._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Teaching is the practice implemented by a teacher aimed at transmitting skills",
    price: 199,
    originalPrize: 323,
    offers: "7% offer",
    rating: 4.9,
    category: "Education",
  },
  {
    id: 11,
    title: "Indian Education",
    image:
      "https://m.media-amazon.com/images/I/81pVd0atsVL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      " the act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment",
    price: 165,
    originalPrize: 349,
    offers: "19% offer",
    rating: 4.3,
    category: "Education",
  },
  {
    id: 12,
    title: "Nature",
    image:
      "https://m.media-amazon.com/images/I/51UV7jk-LlL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "First published in 1869, Nature is the world's leading multidisciplinary science journal. Nature publishes the finest peer-reviewed research that drives ...",
    price: 179,
    originalPrize: 349,
    offers: "16% offer",
    rating: 4.8,
    category: "Nature",
  },
  {
    id: 13,
    title: "Physical Education",
    image:
      "https://m.media-amazon.com/images/I/81KO1plcRBL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Physical education, often abbreviated to Phys Ed. or P.E., is a subject taught in schools around the world.",
    price: 190,
    originalPrize: 349,
    offers: "10% offer",
    rating: 4.5,
    category: "Education",
  },
  {
    id: 14,
    title: "Ronaldo",
    image:
      "https://m.media-amazon.com/images/I/71Z-3b1FwbL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League ...",
    price: 195,
    originalPrize: 419,
    offers: "15% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 15,
    title: "Human Nature",
    image:
      "https://m.media-amazon.com/images/I/71fEmwof+BL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      " Human nature is a concept that denotes the fundamental dispositions and characteristics—including ways of thinking",
    price: 130,
    originalPrize: 359,
    offers: "26% offer",
    rating: 4.3,
    category: "Nature",
  },
  {
    id: 16,
    title: "Nature Stories",
    image:
      "https://m.media-amazon.com/images/I/618vEeTqruL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "Nature stories are one of the best stories to tell to your kids during bedtime or while having a walk in the garden. Parents should often take their kids to ...",
    price: 249,
    originalPrize: 369,
    offers: "28% offer",
    rating: 4.2,
    category: "Nature",
  },
  {
    id: 17,
    title: "Amazing Nature",
    image:
      "https://m.media-amazon.com/images/I/81MmYpGZTJL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "on Nature: The Earth we live in abounds with wonders, mysteries and miracles. Out of these, the most spectacular, spontaneous and ...",
    price: 310,
    originalPrize: 624,
    offers: "30% offer",
    rating: 4.3,
    category: "Nature",
  },
  {
    id: 18,
    title: "Tree",
    image:
      "https://m.media-amazon.com/images/I/518xXBLylwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves.",
    price: 320,
    originalPrize: 549,
    offers: "25% offer",
    rating: 4.0,
    category: "Nature",
  },
  {
    id: 19,
    title: "Nature The Only Healer",
    image:
      "https://m.media-amazon.com/images/I/41H1wOzKkjL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
"Nature the only Healer delineates the only way that is available to humanity to remain disease-free and live healthy is the natural way. To do so means to .",
    price: 424,
    originalPrize: 749,
    offers: "33% offer",
    rating: 4.1,
    category: "Nature",
  },
  {
    id: 20,
    title: "Learning And Teaching",
    image:
      "https://m.media-amazon.com/images/I/81kqcrPmkEL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Learn2teach. Step by Step guide to Effective Online Teaching. ... Teach to Learn and you may Learn to Teach ...",
    price: 520,
    originalPrize: 739,
    offers: "31% offer",
    rating: 4.7,
    category: "Education",
  },
  {
    id: 21,
    title: "Tennis",
    image:
      "https://m.media-amazon.com/images/I/81jRd3jbzeL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      " tennis, original name lawn tennis, game in which two opposing players (singles) or pairs of players (doubles) use tautly strung rackets to ...",
    price: 229,
    originalPrize: 369,
    offers: "17% offer",
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 22,
    title: "Hacking Health",
    image:
      "https://m.media-amazon.com/images/I/71rS9ZMgOoL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "Mukesh bansal's book Hacking health is just did wonders in my life. This book includes all health related information the way you can improve your health and ... ",
    price: 1000,
    originalPrize: 1290,
    offers: "65% offer",
    rating: 4.4,
    category: "Education",
  },
  {
    id: 23,
    title: "The One And Only IVan",
    image:
      "https://m.media-amazon.com/images/I/71xDzmky7dL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "The One and Only Ivan is a 2012 novel written by Katherine Applegate and illustrated by Patricia Castelao. It is about a silverback gorilla named Ivan who ",
    price: 1330,
    originalPrize: 1790,
    offers: "75% offer",
    rating: 4.5,
    category: "Nature",
  },
  {
    id: 24,
    title: "Rain Forest",
    image:
      "https://m.media-amazon.com/images/I/41TYg2oqGwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    description:
      "A rainforest is an area of tall, mostly evergreen trees and a high amount of rainfall. Rainforests are Earth's oldest living ecosystems, with some surviving in ...",
    price: 180,
    originalPrize: 240,
    offers: "13% offer",
    rating: 4.1,
    category: "Nature",
  },
  {
    id: 25,
    title: "Forest Nature",
    image:
      "https://m.media-amazon.com/images/I/7127R-VmyOL._AC_UY327_FMwebp_QL65_.jpg",
    description:
      "A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, ...",
    price: 789,
    originalPrize: 880,
    offers: "12% offer",
    rating: 4.4,
    category: "Nature",
  },
];

export default shoes;
