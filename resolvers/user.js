const {users, tasks} = require("../constants");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  Query:{
    users: () => {
      return users
    },
    user: (parent, args, ctx, info) => {
      return users.find(user => args.id === user.id)
    },
    userByEmail: (parent, {email}, ctx, info) => {
      return users.find(user => user.email === email.toLowerCase())
    }
  },
  Mutation: {
    createUser: (parent, {data}, ctx, info) => {
      // check if the email is beening used by other user
      const {name, email} = data;
      const userExist = users.find(user => user.email === email)
      if(!userExist){
        const newUser = {id: uuidv4() , name, email: email.toLowerCase()}
        users.push(newUser)
        return newUser
      }else{
        throw new Error(`Email ${email} already taken by other user`)
      }
      
    },
  },
  User: {
    tasks: ({id}, ars, ctx, info) => {
      return tasks.filter(task => id === task.user)
    }
  }
}