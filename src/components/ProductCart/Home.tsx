import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Men's Shoes", price: 50 },
  { id: 2, name: "Headphones", price: 80 },
  { id: 3, name: "Backpack", price: 120 },
];

interface HomeProps {
  addToCartHandler: (product: Product) => void;
}

const Home = ({ addToCartHandler }: HomeProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={3}
      flexWrap="wrap"
      marginTop={16}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{ width: 280, borderRadius: 3, boxShadow: 4, p: 1 }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}-/
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => addToCartHandler(product)}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
