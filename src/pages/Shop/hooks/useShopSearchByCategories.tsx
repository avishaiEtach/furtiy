import { useEffect, useState } from "react";
import { productsService } from "../../../services/products.service";
import { useNavigate } from "react-router-dom";
import { useHomePage } from "../../HomePage/hooks/useHomePage";

interface ShopSearchByCategoriesProps {
  setSearchForm: (value: Dictionary) => void;
  setLoading: (value: boolean) => void;
  category: null | string;
  setPage: (value: number) => void;
}

export const useShopSearchByCategories = ({
  setLoading,
  setSearchForm,
  category,
  setPage,
}: ShopSearchByCategoriesProps) => {
  const { categories } = useHomePage();
  const [categoriesNumbers, setCategoriesNumbers] = useState<number[]>([]);
  const navigate = useNavigate();

  const onChosenCategory = (title: string) => {
    setLoading(true);
    setPage(1);
    if (category && category === title) {
      setSearchForm((prev: Dictionary) => (prev = { ...prev, category: "" }));
      navigate({
        search: ``,
      });
    } else {
      setSearchForm(
        (prev: Dictionary) => (prev = { ...prev, category: title })
      );
      navigate({
        search: `?category=${title}`,
      });
    }
  };

  const getCategoriesProdsNumber = async () => {
    const categoriesNumbers = await productsService.getCategoriesProdsNumber(
      categories
    );
    setCategoriesNumbers(categoriesNumbers);
  };

  useEffect(() => {
    getCategoriesProdsNumber();
  }, []);

  return { categories, onChosenCategory, categoriesNumbers };
};
