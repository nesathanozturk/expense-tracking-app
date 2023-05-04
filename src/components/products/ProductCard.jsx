import {
  ProductCardBox,
  ProductImageBox,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductBottom,
  SellButton,
  ProductAmount,
  PurchaseButton,
} from "./styles";

const ProductCard = ({ product, para, setPara, buyProduct, sellProduct }) => {
  return (
    <>
      <ProductCardBox>
        <ProductImageBox>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageBox>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} TL</ProductPrice>
        </ProductInfo>
        <ProductBottom>
          <SellButton onClick={() => sellProduct(product.id)}>Sat</SellButton>
          <ProductAmount>{product.amount}</ProductAmount>
          <PurchaseButton onClick={() => buyProduct(product.id)}>
            Satın al
          </PurchaseButton>
        </ProductBottom>
      </ProductCardBox>
    </>
  );
};

export default ProductCard;
