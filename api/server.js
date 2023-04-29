const express = require("express");
const router = require("./recipes/recipe_router");

const server = express();

server.use(express.json());

server.use("/api/recipes", router);


server.use("*",(req,res) =>  {
    res.status(404).json({message:"Server Not Found"})
})
module.exports = server;
