import { gql, useQuery, useMutation } from "@apollo/client";
import Store from "../../store";
import { useCallback, useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";

interface UserProduct {
  id: number;
}

interface UserProductData {
  getProductsByUserId: UserProduct;
}

const GET_ALL_USER_PRODUCTS = gql`
  query getProductsByUserId($userId: Int!) {
    getProductsByUserId(userId: $userId) {
      id
      title
      categories
      description
      price
      rentPrice
      option
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id)
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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserProducts = () => {
  const store = useContext(Store);
  const { userId } = store;
  const [allUserProducts, setAllUserProducts] = useState<any>();
  const [deleteId, setDeleteId] = useState<number>();
  const res = useQuery<UserProductData>(GET_ALL_USER_PRODUCTS, {
    variables: { userId },
  });

  const [deleteProduct, res2] = useMutation<UserProductData>(DELETE_PRODUCT, {
    variables: { deleteId },
  });

  useEffect(() => {
    if (res.data != null) {
      setAllUserProducts(res.data.getProductsByUserId);
    }
  }, [allUserProducts, res.data, deleteProduct]);

  const [open, setOpen] = useState(false);
  const handleOpen = (id: any) => {
    setDeleteId(id);
    console.log(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleDelete = useCallback(
    (index: any) => {
      deleteProduct({
        variables: { id: deleteId },
      });
      setOpen(false);
    },
    [deleteId, deleteProduct]
  );

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Product Title</TableCell>
              <TableCell align="right">Categories</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rent Price</TableCell>
              <TableCell align="right">Option</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUserProducts != null &&
              allUserProducts.map((item: any, index: any) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">{item.categories}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.rentPrice}</TableCell>
                    <TableCell align="right">{item.option}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => handleOpen(item.id)}>
                        {res2.loading ? <p>..deleting</p> : <DeleteIcon />}
                      </Button>
                      <Button>
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to delete?
              </Typography>
              <Button onClick={handleDelete}>Yes</Button>
              <Button onClick={handleClose}>No</Button>
            </Box>
          </Modal>
        </Table>
      </TableContainer>
    </div>
  );
};

export default observer(UserProducts);
