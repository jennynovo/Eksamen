
const express = require('express');
const server = express();
const PORT = process.env.port || 4000; //her fortæller vi webserveren hvilken port den skal lytte til

const user = require ('../client/model/user.js'); //henter user information - sti

//CRUD ENDPOINTS
server.get("/user", (req, res) => { //henter information
    res.json(user)
 });
 server.post("/user", (req, res) => { //opretter user
    res.json(user)
 });
 server.put("user", (req, res) => { //opdaterer user
    res.json(user)
 });
 server.delete("user", (req, res) => { //sletter user
    res.json(user)
 });