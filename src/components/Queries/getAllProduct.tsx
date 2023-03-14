import { gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      id
      title
      categories
      description
      price
      option
      status
      ownerId
    }
  }
`;
export default GET_ALL_PRODUCTS;
