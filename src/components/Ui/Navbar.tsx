import { useContext } from "react";
import "../../Assets/global.scss";
import { observer } from "mobx-react-lite";
import MenuBar from "./MenuToggle";
import Store from "../../store";
import { Grid, Box, Container, Button } from "@mui/material";

const Navbar = () => {
  const store = useContext(Store);
  const { setBuy, setSell } = store;

  return (
    <div className="navbarContainer">
      <Box sx={{ minWidth: "100vw", boxShadow: "0px 1px 5px #c5c5c5" }}>
        <Container disableGutters maxWidth={false}>
          <Grid container sx={{ height: "10vh", bgcolor: "#f6e1e1" }}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "50%",
                }}
                alt="Your logo."
                src={process.env.PUBLIC_URL + "./logo.png"}
              />
            </Grid>
            <Grid
              item
              xs={6}
              display={"flex"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Button
                onClick={() => {
                  setBuy();
                }}
              >
                Buy / Rent
              </Button>

              <Button
                onClick={() => {
                  setSell();
                }}
              >
                Sell
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              p={5}
              display={"flex"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <MenuBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default observer(Navbar);
