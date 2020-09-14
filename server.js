const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const cors = require("cors");
const dotEnv = require("dotenv");
//==========================================================
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
// setup environment variables
dotEnv.config();
// Express Server
const app = express();
//  Enable Cors
app.use(cors());
// body parser midleware 
app.use(express.json())
// Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})
// Create graphql endpoint useing express app
apolloServer.applyMiddleware({app, path: '/graphql'})
// Restfull API for the root
app.use('/', (req,res,next)=>{
  res.send({message: "Express server started on port!"});
})

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server started on port: ${PORT}`);
  console.log(`Graphql server Endpoint: ${apolloServer.graphqlPath}`);
})
