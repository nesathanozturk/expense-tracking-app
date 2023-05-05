import {
  ProductCardBox,
  ProductImageBox,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Buttons,
  Button,
  ProductAmount,
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
        <Buttons>
          <Button $sellButton onClick={() => sellProduct(product.id)}>
            Sat
          </Button>
          <ProductAmount>{product.amount}</ProductAmount>
          <Button onClick={() => buyProduct(product.id)}>Satın al</Button>
        </Buttons>
      </ProductCardBox>
    </>
  );
};

export default ProductCard;
