const express = require("express");
const routes = express.Router();
const Prodcut = require("../models/Product");

routes.get("/", async (req, res) => {
    try {
        const prodcut = await Prodcut.find();
        res.json({ sucess: true, date: prodcut });
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
});