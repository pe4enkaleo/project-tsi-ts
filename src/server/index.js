// const express = require('express');
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

let items = [
    { id: 1, title: "Яблоки", description: "Свежие яблоки", price: "200"},
    { id: 2, title: "Бананы", description: "Вкусные бананы", price: "300"}
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Сервер продуктов работает!');
})

//Метод GET
app.get("/api/data", (req, res) => {
    res.json(items);
});
//Метод POST
app.post('/api/items', (req, res) => {
    const newItem = {
        id: Date.now(),
        title,
        description,
        price
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
