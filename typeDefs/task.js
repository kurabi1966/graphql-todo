const {gql} = require("apollo-server-express");

module.exports = gql`
  extend type Query{
    tasks: [Task!]
    task(id: ID!): Task
  }

  extend type Mutation{
    createTask(data: CreateTaskInput): Task
  }

  type Task {
    id: ID!
    text: String!
    completed: Boolean!
    user: User!
  }

  input CreateTaskInput {
    text: String!
    completed: Boolean!
    user: ID!
  }
`;