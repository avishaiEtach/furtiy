import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as VegetableBox } from "../../../assets/images/vegetables_box.svg";
import { ReactComponent as Olive } from "../../../assets/images/olive.svg";
import { ReactComponent as Carrot } from "../../../assets/images/carrot.svg";
import { ReactComponent as Leaf } from "../../../assets/images/leaf.svg";
import { ReactComponent as Mushrooms } from "../../../assets/images/mushrooms.svg";
import { ReactComponent as Groceries } from "../../../assets/images/groceries.svg";
import { ReactComponent as Honey } from "../../../assets/images/honey.svg";
import { ReactComponent as Drink } from "../../../assets/images/drink.svg";
import orange from "../../../assets/images/orange.png";
import fruits from "../../../assets/images/fruits.png";
import strawberries from "../../../assets/images/strawberries.png";
import { productsService } from "../../../services/products.service";

export const useHomePage = () => {
  const [active, setActive] = useState("All");
  // const products = useSelector(
  //   (state: RootState) => state.productsModel.products
  // );
  const [products, setProducts] = useState<Product[]>([]);
  const carouselRef = useRef<any>();
  const categories = [
    {
      title: "sets",
      icon: (props: Dictionary) => <VegetableBox {...props} />,
    },
    {
      title: "fruits",
      icon: (props: Dictionary) => <Olive {...props} />,
    },
    {
      title: "vegetables",
      icon: (props: Dictionary) => <Carrot {...props} />,
    },
    {
      title: "greenery",
      icon: (props: Dictionary) => <Leaf {...props} />,
    },
    {
      title: "fungi",
      icon: (props: Dictionary) => <Mushrooms {...props} />,
    },
    {
      title: "groceries",
      icon: (props: Dictionary) => <Groceries {...props} />,
    },
    {
      title: "sweets",
      icon: ({ style, className }: Dictionary) => (
        <Honey className={className} style={{ ...style, marginLeft: "13px" }} />
      ),
    },
    {
      title: "drinks",
      icon: (props: Dictionary) => <Drink {...props} />,
    },
  ];

  const infoCardsData = [
    {
      mainText: "Vegetarian and vega",
      secondaryText: "produces",
      image: orange,
      backgroundColor: "#F2EBD9",
    },
    {
      mainText: "Vegetables and fruits",
      secondaryText: "for a balanced diet",
      image: fruits,
      backgroundColor: "#F4EAEA",
    },
    {
      mainText: "Delicious energy for",
      secondaryText: "every day",
      image: strawberries,
      backgroundColor: "#E9ECF4",
    },
  ];

  const popularProductsCatagories = [
    "All",
    "Milks",
    "Pet Food",
    "Vegetable",
    "Fruits",
  ];

  const handleActive = (name: string) => {
    setActive(name);
  };

  function getTopSellingProducts(products: Product[]) {
    const sortedProducts: Product[] = JSON.parse(JSON.stringify(products)).sort(
      (a: Product, b: Product) => b.amountOfSales - a.amountOfSales
    );
    return sortedProducts.slice(0, 8);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await productsService.getProducts();
    setProducts(products);
  };

  return {
    categories,
    infoCardsData,
    popularProductsCatagories,
    handleActive,
    products,
    active,
    getTopSellingProducts,
    carouselRef,
  };
};
