import { Container } from "@mui/material";
import ProductContainer from "@/Container/ProductContainer";

export interface Product {
  id: number;
  name: string;
  price: number;
}
export interface MarketPlaceProps {
  addToCartHandler: (product: Product) => void;
  cartCount: number;
}

export default function MarketPlace() {
  return (
    <Container>
      <ProductContainer />
    </Container>
  );
}
