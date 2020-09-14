const {users, tasks} = require("../constants");
const { v4: uuidv4 } = require('uuid');

module.exports = { 
  Query:{
    tasks: () => {
        return tasks
    },
    task: (parent, args, ctx, info) => {
        return tasks.find(task => args.id === task.id)
    },
  },
  Mutation: {
    createTask: (parent, {data}, ctx, info) => {
      // check if the user exist
      const userExist = users.find(user=>user.id === data.user)
      if(!userExist){
        throw new Error('User not exist!')
      }
      const {text, completed, user} = data
      const newTask = {id: uuidv4() , text, completed, user}
      tasks.push(newTask)
      return newTask
    }
  },
  Task: {
    user: (parent, args, ctx, info) =>{
      return users.find(user => parent.user === user.id)
    },
    text: ({text}, args, ctx, info) => {
      return text.toUpperCase();
    }
  }
}