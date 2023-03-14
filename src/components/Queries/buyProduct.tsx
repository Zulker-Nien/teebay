import { gql } from "@apollo/client";

const BUY_PRODUCT = gql`
  mutation buyProduct($id: Int!, $status: String!, $ownerId: Int!) {
    buyProduct(id: $id, status: $status, ownerId: $ownerId)
  }
`;
export default BUY_PRODUCT;
