import { storageService } from "./async-storage.service";

export const productsService = {
  getProducts,
  filteredProducts,
  getCategoriesProdsNumber,
  getProductById,
  getRelatedProductsByProdId,
  getProductReviewsUsers,
  saveProduct,
};

async function getProducts(): Promise<Product[]> {
  const products = await storageService.get("products");
  return products;
}

async function getCategoriesProdsNumber(
  categories: Dictionary[]
): Promise<number[]> {
  const products: Product[] = await storageService.get("products");
  const categoriesNumbers = categories.reduce((acc, category) => {
    let number = 0;
    products.forEach((prod) => {
      if (prod.category === category.title) {
        number += 1;
      }
    });
    acc.push(number);
    return acc;
  }, []);
  return categoriesNumbers as number[];
}

async function filteredProducts(
  searchCriteria: CriteriaByProd[],
  page = 1,
  limit = 10
): Promise<{ filterProducts: Product[]; amount: number }> {
  const products: Product[] = await storageService.get("products");
  let filterProducts: Product[] = [];
  products.forEach((product) => {
    const isChecked = searchCriteria.every((criteria: CriteriaByProd) => {
      const { field, operator, value } = criteria;
      if (operator === "equal" && (field === "name" || field === "category")) {
        return (product[field] as string)
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      if (operator === "between" && field === "newPrice") {
        return (
          (product[field] as number) >= value[0] &&
          (product[field] as number) <= value[1]
        );
      }
      return false;
    });
    if (isChecked) {
      filterProducts.push(product);
    }
  });
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const items = filterProducts.slice(startIndex, endIndex);
  return { filterProducts: items, amount: filterProducts.length };
}

async function getProductById(productId: string): Promise<Product | undefined> {
  const products: Product[] = await storageService.get("products");
  const product = products.find((prod) => prod._id === productId);
  return product;
}

async function getRelatedProductsByProdId(
  productId: string
): Promise<Product[] | undefined> {
  const products: Product[] = await storageService.get("products");
  const product = products.find((prod) => prod._id === productId);
  const relatedProduct = products.filter(
    (prod) =>
      prod.newPrice === product?.newPrice || prod.category === product?.category
  );
  return relatedProduct;
}

async function getProductReviewsUsers(
  userId: string | undefined
): Promise<{ name: string; image: string } | undefined> {
  const users: User[] = await storageService.get("users");
  const user = users.find((user) => user._id === userId);
  if (user) {
    return {
      name: user.name.first,
      image: user.picture.medium,
    };
  }
}

async function saveProduct(product: Product): Promise<Product> {
  return await storageService.put("products", product);
}
