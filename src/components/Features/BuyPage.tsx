import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import "../../Assets/global.scss";
import Store from "../../store";
import { observer } from "mobx-react-lite";

const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      id
      title
      categories
      description
      price
      option
    }
  }
`;
const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BuyPage = () => {
  const store = useContext(Store);
  const { singleItem, setSingleItem } = store;
  const [allProducts, setAllProducts] = useState<object[]>([]);

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
    console.log(singleItem);
  }, [setOpen, singleItem]);

  const handleClose = () => setOpen(false);

  const { data } = useQuery(GET_ALL_PRODUCTS);
  useEffect(() => {
    if (data != null) {
      setAllProducts(data.getAllProducts);
    }
  }, [data, setAllProducts]);

  return (
    <div className="buyPageContainer">
      <Grid
        container
        spacing={1}
        sx={{
          minWidth: "80vw",
          padding: "0",
          margin: "0",
        }}
        p={0}
      >
        {allProducts.map((item: any, index: number) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              alignItems="center"
              margin={0}
              sx={{
                width: "100%",
                padding: "2%",
              }}
            >
              <Card
                sx={{
                  bgcolor: "#f6e1e1",
                  ":hover": { scale: "1.05" },
                  transition: "scale 0.3s ease-in-out",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom variant="h5">
                    Title: {item.title}
                  </Typography>

                  <p>Categories:</p>
                  {item.categories.map(
                    (categoryItem: any, categoryIndex: number) => {
                      return (
                        <div key={categoryIndex}>
                          <Chip label={categoryItem} sx={{ margin: "0 2px" }} />
                        </div>
                      );
                    }
                  )}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description: {item.description}
                  </Typography>
                  <Typography color="text.secondary">
                    Price: {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  {item.option === "Sell" && (
                    <Button
                      variant="outlined"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        setSingleItem(item.id);
                        handleOpen();
                      }}
                    >
                      Buy
                    </Button>
                  )}
                  {item.option === "Rent" && (
                    <Button variant="outlined" sx={{ width: "100%" }}>
                      Rent
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Payment and buy.
          </Typography>

          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default observer(BuyPage);
