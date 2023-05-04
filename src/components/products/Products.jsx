import { products } from "../../utils/data";
import { Container, Section } from "./styles";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <Section>
      <Container className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </Section>
  );
};

export default Products;
