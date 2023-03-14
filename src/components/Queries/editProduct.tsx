import { gql } from "@apollo/client";

const EDIT_PRODUCT = gql`
  mutation updateProduct($id: Int!, $title: String!, $categories: [String!]!) {
    updateProduct(id: $id, title: $title, categories: $categories)
  }
`;
export default EDIT_PRODUCT;
