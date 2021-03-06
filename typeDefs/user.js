const {gql} = require("apollo-server-express");

module.exports = gql`
  extend type Query{
    users: [User!]
    user(id: ID!): User
    userByEmail(email: String!): User
  }

  type User {
      id: ID!
      name: String!
      email: String!
      tasks: [Task!]
  }

  extend type Mutation{
    createUser(data: CreateUserInput!): User
  }

  input CreateUserInput {
    name: String!
    email: String!
  }
`;