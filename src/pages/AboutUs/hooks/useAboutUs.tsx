import medalIcon from "../../../assets/images/medal-icon.png";
import giftIcon from "../../../assets/images/gift-icon.png";
import offersIcon from "../../../assets/images/offers-icon.png";
import returnsIcon from "../../../assets/images/returns-icon.png";
import satisfactionIcon from "../../../assets/images/satisfaction-icon.png";
import dailyDealIcon from "../../../assets/images/daily-deal-icon.png";
import businessMan1 from "../../../assets/images/businessMan1.png";
import businessMan2 from "../../../assets/images/businessMan2.png";
import businessWoman1 from "../../../assets/images/businessWoman1.png";
import businessWoman2 from "../../../assets/images/businessWoman2.png";

export const useAboutUs = () => {
  const carouselImages = [
    {
      imgPath: "https://static.toiimg.com/photo/msid-75108461/75108461.jpg",
    },
    {
      imgPath:
        "https://www.coldtraila.co.uk/wp-content/uploads/2019/03/shutterstock_130707287.jpg",
    },
    {
      imgPath:
        "https://images.herzindagi.info/image/2022/Nov/winter-fruits.jpg",
    },
  ];
  const carouselResponsiveProps = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  const whatWeProvideCards = [
    {
      image: offersIcon,
      mainText: "Best Prices & Offers",
      subText:
        "Unbeatable Deals Await at Frutiy! Discover the Best Prices and Offers Today.",
      iconColor: "#7EDFB2",
    },
    {
      image: giftIcon,
      mainText: "Wide Assortment",
      subText:
        "Explore Our Diverse Selection at Frutiy! A Wide Assortment of Vegan Goodness Awaits.",
      iconColor: "#F96E99",
    },
    {
      image: medalIcon,
      mainText: "Free Delivery",
      subText:
        "Experience the Convenience of Free Delivery on Every Order at Frutiy! Shop Now and Embrace Seamless Shopping.",
      iconColor: "#FDCB5F",
    },
    {
      image: returnsIcon,
      mainText: "Easy Returns",
      subText:
        "Seamless Satisfaction: Enjoy Easy Returns on Your Frutiy Orders! Shop with Confidence Today.",
      iconColor: "red",
    },
    {
      image: satisfactionIcon,
      mainText: "100% Satisfaction",
      subText:
        "Experience the Assurance of 100% Satisfaction with Frutiy. Discover Joyful Vegan Living Today.",
      iconColor: "red",
    },
    {
      image: dailyDealIcon,
      mainText: "Great Daily Deal",
      subText:
        "Discover Incredible Savings with Our Daily Deals at Frutiy! Elevate Your Vegan Lifestyle Today.",
      iconColor: "red",
    },
  ];

  const aboutUsInfo = [
    {
      number: 10,
      suffix: "k",
      subText: "Glorious years",
    },
    {
      number: 34,
      suffix: "+",
      subText: "Happy clients",
    },
    {
      number: 12,
      suffix: "+",
      subText: "Projects complete",
    },
    {
      number: 110,
      suffix: "+",
      subText: "Products Sale",
    },
  ];

  const team = [
    {
      image: businessMan1,
      name: "Oliver Griffin",
      role: "Manager",
      backgroundColor: "#CBC5F1",
    },
    {
      image: businessWoman2,
      name: "April Watson",
      role: "Product Manager",
      backgroundColor: "#B4F2B8",
    },
    {
      image: businessMan2,
      name: "Rafael Hale",
      role: "Full Stack Developer",
      backgroundColor: "#C5D7F0",
    },
    {
      image: businessWoman1,
      name: "Cora Mcgee",
      role: "UX/UI Designer",
      backgroundColor: "#F8B490",
    },
  ];

  return {
    carouselImages,
    carouselResponsiveProps,
    whatWeProvideCards,
    aboutUsInfo,
    team,
  };
};
