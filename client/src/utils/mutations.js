import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $category: String!
    $experience: String!
    $optional: String!
    $phone: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      category: $category
      experience: $experience
      optional: $optional
      phone: $phone
    ) {
      _id
      firstName
      lastName
      email
      category
      experience
      optional
      phone
    }
  }
`;
