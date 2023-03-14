import { gql } from "@apollo/client";

const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;

export default DELETE_PRODUCT;
