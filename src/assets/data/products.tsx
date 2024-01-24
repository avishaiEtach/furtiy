import orange from "../images/orange.png";
import carrots from "../images/carrots.png";
import fruitBasketSet from "../images/Fruit Basket Set.png";
import broccoli from "../images/broccoli.png";
import grapes from "../images/grapes.png";
import berriesSetBox from "../images/berries set box.png";
import saladGreensBundle from "../images/Salad Greens Bundle.png";
import truffle from "../images/truffles.png";
import kiwi from "../images/kiwi.png";
import pineapple from "../images/pineapple.png";
import bellPepper from "../images/bell pepper.png";

export const products: Product[] = [
  {
    category: "fruits",
    name: "orange",
    image: orange,
    type: "hot",
    rating: 4,
    oldPrice: 30,
    newPrice: 24,
    popularProducts: true,
    amountOfSales: 30,
    sortDescriptionHighlights: [
      "A natural remedy for constipation, aiding digestive health.",
      "Regular consumption can boost hemoglobin levels.",
      "Facilitates weight loss by eliminating toxins and supporting digestion.",
    ],
    sortDescription: `Oranges, a timeless and familiar citrus delight, have graced tables for generations, captivating palates with their refreshing flavor and abundant health benefits.`,
    fullDescription: `The vibrant and succulent orange, a veritable treasure trove of health benefits, stands as a beacon of wellness in the realm of fruits. Bursting with a symphony of flavors that seamlessly combine sweet and tangy notes, this citrus marvel not only tantalizes the taste buds but also bestows a plethora of nutrients upon the body.
    Rich in immune-boosting vitamin C, the orange stands tall as a formidable guardian against illnesses, fortifying the body's defenses with each juicy bite. Its antioxidant prowess extends beyond immune support, combating oxidative stress and contributing to a radiant complexion and overall well-being.
    The orange's natural fiber content serves as a digestive ally, promoting gut health and aiding in the body's natural detoxification processes. This low-calorie wonder also makes it a guilt-free indulgence for those mindful of their calorie intake, while its natural sugars provide a wholesome energy boost.
    Not merely content with fortifying the body from the inside, oranges lend their nutritional might to enhance cardiovascular health. Potassium, present in ample amounts, supports heart function and helps maintain healthy blood pressure levels. Furthermore, the orange emerges as a champion in the battle against inflammation, with anti-inflammatory compounds that may aid in reducing the risk of chronic diseases.
    Its hydration quotient, coupled with a bounty of essential minerals, contributes to radiant skin and overall vitality. Incorporating the orange into your daily diet is a zestful journey toward holistic health, where flavor and nourishment harmoniously converge. Revel in the citrus symphony, savor the healthful delight, and let the orange be your ally on the path to a vibrant, well-nourished life..`,
    _id: "65a1259487d8be3323fca532",
    reviews: [
      {
        date: new Date(
          "Sat Aug 12 2023 14:29:21 GMT+0300 (Israel Daylight Time)"
        ),
        reviewRating: 5,
        userId: "65a1256fddb411c2bba9f3ff",
        review:
          "Indulging in Frutiy's orange creations is like stepping into a citrus wonderland. Their commitment to crafting delectable treats with a burst of orange goodness is truly commendable. Whether it's the tangy twists in their snacks or the invigorating citrus notes in their beverages, every bite and sip is a journey into citrus paradise. Frutiy has truly mastered the art of elevating the citrus experience, making it a delightful adventure for any fruit aficionado. Don't miss out on the citrus extravaganza that Frutiy has to offer!",
      },
      {
        userId: "65a8dde1b5c453bbebc33dad",
        date: new Date(
          "Sat Mar 11 2023 15:58:40 GMT+0200 (Israel Standard Time)"
        ),
        reviewRating: 4,
        review:
          "I was pleasantly surprised by the diverse range of orange-infused vegan options at Frutiy. The subtle sweetness and tanginess in each product showcased the natural beauty of the ingredients. It's a delightful experience for those looking to explore unique and ethical treats.",
      },
      {
        userId: "65a8de72f8ad57c0fed67db7",
        date: new Date(
          "Sun Jun 25 2023 04:57:40 GMT+0300 (Israel Daylight Time)"
        ),
        reviewRating: 5,
        review:
          "Frutiy has mastered the art of creating vegan products that not only align with ethical values but also deliver an excellent taste. Their orange-based offerings are a testament to their commitment to cruelty-free cuisine. A go-to destination for those seeking vegan excellence!",
      },
      {
        userId: "65a8df45e5a564aad125fc49",
        date: new Date(
          "Fri Jan 06 2023 03:05:40 GMT+0200 (Israel Standard Time)"
        ),
        reviewRating: 3,
        review:
          "Navigating the flavor spectrum at Frutiy is a journey of taste and ethics indeed! The orange-infused options offer a perfect balance between savory and sweet. The innovative twists on traditional orange flavors showcase the culinary expertise behind these plant-based wonders.",
      },
      {
        userId: "65a8dfdf685bffde63f195d2",
        date: new Date(
          "Wed May 10 2023 23:25:30 GMT+0300 (Israel Daylight Time)"
        ),
        reviewRating: 4,
        review:
          "As an adventurous eater, I'm always on the lookout for unique vegan products. Frutiy exceeded my expectations with their inventive orange creations. From orange-infused snacks to surprising meal options, it's a culinary adventure that every food explorer should embark on!",
      },
    ],
  },
  {
    category: "vegetables",
    name: "carrots",
    image: carrots,
    type: "",
    rating: 3.5,
    oldPrice: 0,
    newPrice: 22,
    popularProducts: true,
    amountOfSales: 32,
    sortDescription: `
    Carrots, renowned for their vibrant orange hue, are not only a delicious addition to meals but also a nutritional powerhouse, packed with beta-carotene to promote eye health and boost the immune system.`,
    fullDescription: "",
    _id: "65a125b94d544df7f67106a2",
    sortDescriptionHighlights: [
      "Eases constipation with rich dietary fiber.",
      "Boosts hemoglobin for better blood health.",
      "Supports weight loss through detox and digestion.",
    ],
    reviews: [],
  },
  {
    category: "fungi",
    name: "Truffle",
    image: truffle,
    type: "",
    rating: 4.8,
    oldPrice: 0,
    newPrice: 90,
    popularProducts: true,
    amountOfSales: 5,
    sortDescription: `Truffle, a prized culinary delight, is an underground fungus known for its distinct aroma and rich flavor, adding a touch of luxury to various dishes.`,
    fullDescription: "",
    _id: "65a125c493c952e57c8b50e5",
    sortDescriptionHighlights: [
      "Rich in antioxidants for overall health.",
      "Enhances gourmet culinary experiences.",
      "Luxurious touch with truffle oil in recipes.",
    ],
    reviews: [],
  },
  {
    category: "vegetables",
    name: "broccoli",
    image: broccoli,
    type: "new",
    rating: 3.8,
    oldPrice: 15,
    newPrice: 10,
    popularProducts: true,
    amountOfSales: 10,
    sortDescription:
      "Broccoli, a versatile cruciferous vegetable, is celebrated for its dense nutritional profile, providing a myriad of vitamins and minerals essential for overall health.",
    fullDescription: "",
    _id: "65a125ce9ee6c18f39e58787",
    sortDescriptionHighlights: [
      "Broccoli is a nutritional powerhouse.",
      "Rich in vitamins and minerals for health.",
      "Fiber content supports digestion and weight management.",
    ],
    reviews: [],
  },
  {
    category: "sets",
    name: "Fruit Basket Set",
    image: fruitBasketSet,
    type: "new",
    subTitle: "by order",
    rating: 4.7,
    oldPrice: 0,
    newPrice: 30,
    popularProducts: true,
    amountOfSales: 40,
    sortDescription:
      "A delightful fruit basket set, a vibrant ensemble of nature's goodness, offers a colorful array of fresh, hand-picked fruits, perfect for gifting or enjoying a healthy indulgence",
    fullDescription: "",
    _id: "65a125d4e08234d0ceb4fcff",
    sortDescriptionHighlights: [
      "A delightful gift for a burst of natural goodness.",
      "Nourishes with a variety of vitamins and minerals.",
      "Supports a healthy lifestyle with wholesome fruit choices.",
    ],
    reviews: [],
  },
  {
    category: "fruits",
    name: "grapes",
    image: grapes,
    type: "hot",
    rating: 3.9,
    oldPrice: 23,
    newPrice: 16,
    popularProducts: true,
    amountOfSales: 15,
    sortDescription:
      "Grapes, juicy and versatile, are flavorful berries packed with antioxidants, making them a refreshing and healthy addition to various culinary delights.",
    fullDescription: "",
    _id: "65a125dd02ec4346fdb255a0",
    sortDescriptionHighlights: [
      "Grapes offer a refreshing burst of natural sweetness.",
      "Packed with antioxidants for overall health benefits.",
      "Contributes to hydration with high water content.",
    ],
    reviews: [],
  },
  {
    category: "greenery",
    name: "Salad Greens Bundle",
    image: saladGreensBundle,
    type: "",
    rating: 3.8,
    oldPrice: 15,
    newPrice: 10,
    popularProducts: true,
    amountOfSales: 8,
    sortDescription:
      "The Salad Greens Bundle, a vibrant medley of fresh and crisp leafy vegetables, provides a nutrient-packed foundation for wholesome salads, elevating both taste and nutritional value.",
    fullDescription: "",
    _id: "65a125e3e4d170c4131a0b2e",
    sortDescriptionHighlights: [
      "Promotes digestive health with high fiber content.",
      "Contributes to overall well-being with a nutrient-rich mix.",
      "Supports weight loss through detox and digestive balance.",
    ],
    reviews: [],
  },
  {
    category: "sets",
    name: "Berries Set Box",
    image: berriesSetBox,
    type: "sale",
    subTitle: "by order",
    rating: 4.9,
    oldPrice: 70,
    newPrice: 40,
    popularProducts: true,
    amountOfSales: 60,
    sortDescription:
      "The Berries Set Box, a vibrant assortment of nature's jewels, offers a burst of antioxidant-rich flavors, promoting both indulgence and well-being in a single, delightful package.",
    fullDescription: "",
    _id: "65a125eb570f252c1b43a35b",
    sortDescriptionHighlights: [
      "A flavorful, antioxidant-packed wellness treat.",
      "Indulge in nature's goodness for a delightful and healthy snack.",
      "Supports overall health with a colorful mix of nutrient-rich berries.",
    ],
    reviews: [],
  },
  {
    category: "fruits",
    name: "kiwi",
    image: kiwi,
    type: "new",
    rating: 4.2,
    oldPrice: 0,
    newPrice: 14,
    popularProducts: false,
    amountOfSales: 36,
    sortDescription:
      "Kiwi, a small yet potent fruit, is celebrated for its vibrant green flesh, tangy-sweet flavor, and an abundance of vitamins, adding a refreshing and nutritious element to culinary delights.",
    fullDescription: "",
    _id: "65a125f28fdab3431be404be",
    sortDescriptionHighlights: [
      "A zesty burst of flavor and nutrition.",
      "Rich in vitamin C for immune system support.",
      "Contributes to digestive health with dietary fiber.",
    ],
    reviews: [],
  },
  {
    category: "fungi",
    name: "Portobello Mushroom",
    image: "portobello_mushroom",
    type: "hot",
    rating: 4.6,
    oldPrice: 0,
    newPrice: 18,
    popularProducts: false,
    amountOfSales: 10,
    sortDescription:
      "The Portobello Mushroom, a meaty and versatile fungi, offers a savory and robust flavor, making it a wholesome plant-based alternative for various culinary creations.",
    fullDescription: "",
    _id: "65a125f9dc6f695d0542d6d3",
    sortDescriptionHighlights: [
      "Rich, savory flavor for versatile plant-based dishes.",
      "Dietary fiber aids digestion and prevents constipation.",
      "Low in calories, supporting weight management goals.",
    ],
    reviews: [],
  },
  {
    category: "vegetables",
    name: "zucchini",
    image: "zucchini",
    type: "",
    rating: 4.0,
    oldPrice: 0,
    newPrice: 12,
    popularProducts: false,
    amountOfSales: 12,
    sortDescription:
      "Zucchini, a versatile summer squash, is prized for its mild flavor and tender texture, adding a nutritious and low-calorie element to a variety of dishes.",
    fullDescription: "",
    _id: "65a126003ce6356c6d2c6ab1",
    sortDescriptionHighlights: [
      "A versatile, mild-flavored culinary delight.",
      "Rich in vitamins, adding nutritional value to dishes.",
      "Low-calorie option for guilt-free, healthy recipes.",
    ],
    reviews: [],
  },
  {
    category: "greenery",
    name: "Potted Herbs Trio",
    image: "potted_herbs_trio",
    type: "new",
    rating: 4.5,
    oldPrice: 0,
    newPrice: 28,
    popularProducts: false,
    amountOfSales: 0,
    sortDescription:
      "The Potted Herbs Trio, a fragrant and convenient assortment, brings the freshness of basil, parsley, and rosemary to your fingertips, enhancing culinary experiences with a burst of aromatic and flavorful herbs.",
    fullDescription: "",
    _id: "65a12607f9954bccdc6eb8e9",
    sortDescriptionHighlights: [
      "Freshness for culinary creativity.",
      "Convenient access to basil, parsley, and rosemary.",
      "Enhances dishes with aromatic and flavorful herb blend.",
    ],
    reviews: [],
  },
  {
    category: "sets",
    name: "Grilling Essentials Set",
    image: "grilling_essentials_set",
    type: "hot",
    subTitle: "by order",
    rating: 4.8,
    oldPrice: 0,
    newPrice: 65,
    popularProducts: false,
    amountOfSales: 0,
    sortDescription:
      "The Grilling Essentials Set, a curated collection of premium spices and sauces, elevates outdoor cooking with a symphony of bold flavors, ensuring a memorable and savory grilling experience.",
    fullDescription: "",
    _id: "65a1260e783214768784badc",
    sortDescriptionHighlights: [
      "High-quality tools for BBQ mastery.",
      "Premium grilling utensils for a seamless cooking experience.",
      "Ensure grilling success with the right equipment.",
    ],
    reviews: [],
  },
  {
    category: "fruits",
    name: "pineapple",
    image: pineapple,
    type: "",
    rating: 4.3,
    oldPrice: 0,
    newPrice: 20,
    popularProducts: false,
    amountOfSales: 25,
    sortDescription:
      "Pineapple, a tropical delight, entices with its juicy sweetness and vibrant flavor, providing a refreshing and vitamin-rich addition to both sweet and savory culinary creations.",
    fullDescription: "",
    _id: "65a126180e2b30882a4797d5",
    sortDescriptionHighlights: [
      "Juicy sweetness adds tropical flair to dishes.",
      "Vitamin-rich for overall health benefits.",
      "Supports digestion with natural enzymes.",
    ],
    reviews: [],
  },
  {
    category: "vegetables",
    name: "bell pepper",
    image: bellPepper,
    type: "sale",
    rating: 3.9,
    oldPrice: 15,
    newPrice: 8,
    popularProducts: false,
    amountOfSales: 14,
    sortDescription:
      "Bell pepper, a colorful and crisp vegetable, enriches dishes with its versatile flavor and high vitamin content, contributing both vibrancy and nutritional value to various culinary creations.",
    fullDescription: "",
    _id: "65a1262050c78333b83cedd0",
    sortDescriptionHighlights: [
      "Colorful addition with versatile flavor.",
      "High vitamin content for nutritional boost.",
      "Contributes to digestion and weight management.",
    ],
    reviews: [],
  },
  {
    category: "sets",
    name: "Baking Essentials Kit",
    image: "baking_essentials_kit",
    type: "sale",
    subTitle: "by order",
    rating: 4.7,
    oldPrice: 50,
    newPrice: 38,
    popularProducts: false,
    amountOfSales: 0,
    sortDescription:
      "The Baking Essentials Kit, featuring top-quality ingredients and essential tools, equips bakers with everything needed to create delightful and scrumptious treats with ease.",
    fullDescription: "",
    _id: "65a12627658803ab1bff52ae",
    sortDescriptionHighlights: [
      "Premium ingredients for delectable treats.",
      "Essential tools for effortless baking.",
      "Craft delightful goodies with ease.",
    ],
    reviews: [],
  },
];
