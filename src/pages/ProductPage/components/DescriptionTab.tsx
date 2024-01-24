interface DescriptionTabProps {
  product: Product;
}

export const DescriptionTab = ({ product }: DescriptionTabProps) => {
  return (
    <>
      <h3 className="products__tab__header">{`General information about ${product.name}`}</h3>
      <p className="description__tab__paragraph">{product.fullDescription}</p>
    </>
  );
};
