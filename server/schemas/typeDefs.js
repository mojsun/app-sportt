// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     user: User
//   }

//   type Mutation {
//     addUser(
//       firstName: String!
//       lastName: String!
//       email: String!
//       password: String!
//     ): Auth

//     updateUser(
//       firstName: String
//       lastName: String
//       email: String
//       password: String
//     ): User
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;

// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     password: String
//     category: String
//     experience: String
//     optional: String
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     users: [User]
//     user: User
//   }

//   type Mutation {
//     addUser(
//       firstName: String!
//       lastName: String!
//       email: String!
//       password: String!
//       category: String!
//       experience: String!
//       optional: String!
//     ): Auth

//     updateUser(
//       firstName: String
//       lastName: String
//       email: String
//       password: String
//       category: String
//       experience: String
//       optional: String
//     ): User
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    category: String
    experience: String
    optional: String
    phone: String
  }

  type Query {
    users: [User]
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      category: String!
      experience: String!
      optional: String!
      phone: String
    ): User

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      category: String
      experience: String
      optional: String
      phone: String
    ): User
  }
`;

module.exports = typeDefs;
