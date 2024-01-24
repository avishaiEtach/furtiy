import { useState } from "react";

export const useProductReviews = () => {
  const [reviewsToggle, setReviewsToggle] = useState<any>([]);

  const onClick = (ev: any, index: number) => {
    if (reviewsToggle.includes(index)) {
      const reviewsToggleCopy = [...reviewsToggle];
      const itemIndex = reviewsToggleCopy.findIndex((item) => item === index);
      reviewsToggleCopy.splice(itemIndex, 1);
      setReviewsToggle([...reviewsToggleCopy]);
    } else {
      setReviewsToggle([...reviewsToggle, index]);
    }
  };

  function countSentences(text: string) {
    const sentences = text.split(/[.!?]/);
    const nonEmptySentences = sentences.filter(
      (sentence) => sentence.trim() !== ""
    );
    return nonEmptySentences.length + 3 > 7;
  }

  return { reviewsToggle, onClick, countSentences };
};
