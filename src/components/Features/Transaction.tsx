import { useQuery } from "@apollo/client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GET_PRODUCTS_OWNED from "../Queries/ownedProduct";
import { OwnerProduct } from "../Types/productTypes";
import Store from "../../store";

interface OwnerProductData {
  getProductsOwned: OwnerProduct;
}
const Transaction = () => {
  const store = useContext(Store);
  const { userId } = store;

  const [allProductsOwned, setAllProductsOwned] = useState<any>();

  const getProductOwned = useQuery<OwnerProductData>(GET_PRODUCTS_OWNED, {
    variables: { ownerId: userId },
  });

  useEffect(() => {
    if (getProductOwned.data != null) {
      setAllProductsOwned(getProductOwned.data.getProductsOwned);
    }
  }, [getProductOwned.data]);
  console.log(allProductsOwned);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product Title</TableCell>
              <TableCell align="center">Categories</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Rent Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProductsOwned != null &&
              allProductsOwned.map((item: any, index: any) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">{item.categories}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                    <TableCell align="center">{item.rentPrice}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Transaction;
