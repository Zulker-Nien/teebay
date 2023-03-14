import { gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation addProduct(
    $title: String!
    $categories: [String!]!
    $description: String!
    $price: Int!
    $rentPrice: Int!
    $option: String!
    $userId: Int!
    $status: String!
    $ownerId: Int!
  ) {
    addProduct(
      title: $title
      categories: $categories
      description: $description
      price: $price
      rentPrice: $rentPrice
      option: $option
      userId: $userId
      status: $status
      ownerId: $ownerId
    ) {
      title
      categories
      description
      price
      rentPrice
      option
      userId
      status
      ownerId
    }
  }
`;

export default ADD_PRODUCT;
