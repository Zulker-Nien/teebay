import { Button, Stack, Container, Grid } from "@mui/material";
import { useState } from "react";
import "../../Assets/global.scss";
import AddProductForm from "../AddProductForm";
import UserProducts from "./UserProducts";

const SellPage = () => {
  const [addProduct, setAddProduct] = useState<boolean>();
  const [myAllProducts, setMyAllProducts] = useState<boolean>();
  return (
    <div className="sellPageContainer">
      <Grid container spacing={3}>
        <Grid item xl={4}>
          <Stack spacing={2} direction="column">
            <Button
              variant="outlined"
              onClick={() => {
                setAddProduct(false);
                setMyAllProducts(true);
              }}
            >
              My Products
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setAddProduct(true);
                setMyAllProducts(false);
              }}
            >
              Add New Product
            </Button>
            <Button variant="outlined">View History</Button>
          </Stack>
        </Grid>
        <Grid item xl={8}>
          <Container
            disableGutters
            sx={{
              height: "70vh",
              width: "70vw",
              border: "2px solid #c5c5c5",
              p: "2%",
              position: "relative",
              overflowY: "scroll",
            }}
          >
            {addProduct && <AddProductForm />}
            {myAllProducts && <UserProducts />}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default SellPage;
