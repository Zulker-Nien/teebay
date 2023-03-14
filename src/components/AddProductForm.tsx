import { gql, useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Store from "../store";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const categoryList = [
  "Electronics",
  "Furniture",
  "Home Appliances",
  "Sporting Goods",
  "Outdoor",
  "Toys",
];
const optionList = ["Rent", "Sell"];

type Inputs = {
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
};

interface CreateProductInput {
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
  userId: number;
}

interface CreateProductResponse {
  addProduct: CreateProductInput;
}

const ADD_PRODUCT = gql`
  mutation addProduct(
    $title: String!
    $categories: [String!]!
    $description: String!
    $price: Int!
    $rentPrice: Int!
    $option: String!
    $userId: Int!
  ) {
    addProduct(
      title: $title
      categories: $categories
      description: $description
      price: $price
      rentPrice: $rentPrice
      option: $option
      userId: $userId
    ) {
      title
      categories
      description
      price
      rentPrice
      option
      userId
    }
  }
`;

const AddProductForm = () => {
  const productAddNotification = () => toast("Product added successfully.");
  const store = useContext(Store);
  const { setBuy, userId } = store;
  const { register, handleSubmit } = useForm<Inputs>();
  const [addProduct] = useMutation<CreateProductResponse, CreateProductInput>(
    ADD_PRODUCT
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await addProduct({
        variables: {
          title: data.title,
          categories: data.categories,
          description: data.description,
          price: Number(data.price),
          rentPrice: Number(data.rentPrice),
          option: data.option,
          userId: Number(userId),
        },
      });
      console.log(data);
      setBuy();

      productAddNotification();
    } catch (error) {
      //   unsuccessfulNotification();
    }
  };
  useEffect(() => {}, [handleSubmit]);

  const [categories, setCategories] = useState<string[]>([]);
  const [option, setOption] = useState<string>("");
  const handleCategories = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleOption = (event: SelectChangeEvent<typeof option>) => {
    setOption(event.target.value as string);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          height: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              placeholder="Title"
              {...register("title", {})}
              sx={{ minWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Categories
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={categories}
                {...register("categories")}
                onChange={handleCategories}
                sx={{ minWidth: "100%" }}
                input={<OutlinedInput label="Categories" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {categoryList.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={categories.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              style={{
                width: "99%",
                maxWidth: "99%",
                minWidth: "99%",
                minHeight: "25vh",
                border: "1px solid #c5c5c5",
                borderRadius: "5px",
              }}
              {...register("description", {})}
              placeholder="Description"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="number"
              placeholder="Price"
              {...register("price", {})}
              sx={{ minWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              type="number"
              placeholder="Rent Price"
              {...register("rentPrice", {})}
              sx={{ minWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Option
              </InputLabel>
              <Select
                value={option}
                {...register("option")}
                onChange={handleOption}
                input={<OutlinedInput label="Option" />}
              >
                {optionList.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "100%", mt: "2%" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default AddProductForm;
