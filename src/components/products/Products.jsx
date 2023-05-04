import { useState } from "react";
import { Container, Section } from "./styles";
import { products } from "../../utils/data";
import ProductCard from "./ProductCard";

const Products = ({ para, setPara }) => {
  const [product, setProduct] = useState(products);

  const buyProduct = (id) => {
    const item = product.findIndex((item) => item.id === id);

    let productPrice = product[item].price;

    let newPrice = para - productPrice;

    if (newPrice < 0 || para < productPrice) {
      alert("Daha harcanacak paranız kalmadı! Bir şeyler sat!");
    } else {
      product[item].amount++;
      setPara(newPrice);
      setProduct([...product]);
    }
  };

  const sellProduct = (id) => {
    const item = product.findIndex((item) => item.id === id);

    let productPrice = product[item].price;

    let newPrice = para + productPrice;

    if (product[item].amount < 1) {
      alert("Satılacak ürünün yok! Bir şeyler satın al!");
      product[item].amount = 0;
    } else {
      product[item].amount--;
      setPara(newPrice);
      setProduct([...product]);
    }
  };

  return (
    <Section>
      <Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            para={para}
            setPara={setPara}
            buyProduct={buyProduct}
            sellProduct={sellProduct}
          />
        ))}
      </Container>
    </Section>
  );
};

export default Products;
