const express = require("express");
const routes = express.Router();
const Prodcut = require("../models/Product");
// const jwt = require("jsonwebtoken");
// const authMidllerware = require("../middleware/authMiddleware");

// const SECRET_KEY = "your_secret_key";

routes.post("/", async (req, res) => {
    try {

        const { id, name, price, category, inStock } = req.body;
        const newProduct = new Prodcut({ id, name, price, category, inStock });
        await newProduct.save();
        // const token = await jwt.sign({ id: name._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ sucess: true, date: newProduct});
    } catch (error) {
        res.status(400).json({ sucess: false, message: error.message });
    }
});

// routes.get("/", async (req, res) => {
//     try {
//         const prodcut = await Prodcut.find();
//         res.json({ sucess: true, date: prodcut });
//     } catch (error) {
//         res.status(500).json({ sucess: false, message: error.message });
//     }
// });


routes.get("/:id", async (req, res) => {
    try {
        const prodcut = await Prodcut.findById(req.params.id);
        if (!prodcut) return res.status(404).json({ sucess: true, message: "Product Not Found" });
        res.json({ sucess: true, date: prodcut });
    } catch (error) {
        res.status(400).json({ sucess: false, message: "Invalid ID" });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const updated = await Prodcut.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updated) return res.status(404).json({ sucess: true, message: "Product Not Found" });
        res.json({ message: " Product Updated ", prodcut: updated });
    } catch (error) {
        res.status(400).json({ sucess: false, message: error.message });
    }
});

routes.delete("/:id", async (req, res) => {
    try {
        const deleted = await Prodcut.findByIdAndDelete(req.body.id);
        if (!deleted) return res.status(404).json({ sucess: true, message: "Product Nor Found" });
        res.json({ message: "Product Deleted ", prodcut: deleted });
    } catch (error) {
        res.status(400).json({ sucess: false, message: error.message });
    }
});

routes.get("/:in-stock", async (req, res) => {
    try {
        const prodcuts = await Prodcut.find({ inStock: true });
        res.json(prodcuts);
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
});


module.exports = routes;