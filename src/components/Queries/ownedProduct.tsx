import { gql } from "@apollo/client";

const GET_PRODUCTS_OWNED = gql`
  query getProductsOwned($ownerId: Int!) {
    getProductsOwned(ownerId: $ownerId) {
      title
      categories
      description
      price
      rentPrice
    }
  }
`;
export default GET_PRODUCTS_OWNED;
