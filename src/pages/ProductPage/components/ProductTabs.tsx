import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { DescriptionTab } from "./DescriptionTab";
import { ReviewsTab } from "./ReviewsTab";
import "react-tabs/style/react-tabs.css";

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <span>Description</span>
        </Tab>
        <Tab>
          <div className="flex g10 align-center">
            <span>Reviews</span>
            <span className="flex align-center justify-center product__tabs__review__length">
              {product.reviews.length}
            </span>
          </div>
        </Tab>
      </TabList>
      <TabPanel>
        <DescriptionTab product={product} />
      </TabPanel>
      <TabPanel>
        <ReviewsTab product={product} />
      </TabPanel>
    </Tabs>
  );
};
