import { gql } from "@apollo/client";

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
export default GET_ALL_USER_PRODUCTS;
