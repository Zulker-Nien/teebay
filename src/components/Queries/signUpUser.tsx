import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $address: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      address: $address
      email: $email
      phoneNumber: $phoneNumber
      password: $password
    ) {
      firstName
      lastName
      address
      email
      phoneNumber
      password
    }
  }
`;
export default CREATE_USER;
