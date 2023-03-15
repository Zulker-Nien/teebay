import { gql } from "@apollo/client";

const EDIT_PRODUCT = gql`
  mutation updateProduct(
    $id: Int!
    $title: String!
    $categories: [String!]!
    $description: String!
    $price: Int!
    $rentPrice: Int!
    $option: String!
  ) {
    updateProduct(
      id: $id
      title: $title
      categories: $categories
      description: $description
      price: $price
      rentPrice: $rentPrice
      option: $option
    )
  }
`;
export default EDIT_PRODUCT;
