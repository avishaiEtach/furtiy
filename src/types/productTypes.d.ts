import { MyCustomGlobal } from "./classes";

declare global {
  interface Product {
    category: string;
    name: string;
    image: string;
    type: "hot" | "new" | "sale" | "";
    rating: number;
    oldPrice: number;
    newPrice: number;
    popularProducts: boolean;
    amountOfSales: number;
    subTitle?: string;
    sortDescription: string;
    fullDescription: string;
    sortDescriptionHighlights: string[];
    reviews: ProductReview[];
    _id: string;
  }
  interface ProductCardProps {
    product: Product;
    minimize?: boolean;
  }
  interface ProductReview {
    date: Date;
    reviewRating: number;
    review: string;
    userId?: string;
    newUser?: { name: string; email: string };
  }
  interface ProductReviewToShow {
    date: Date;
    reviewRating: number;
    review: string;
    name: string;
    image: string;
  }
}
