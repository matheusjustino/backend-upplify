const axios = require('axios');
const Product = require('../model/Product');

module.exports = {

    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },
    async index2(req, res) {
        console.log(req.params.cuisine);
        const products = await Product.find({ cuisine: req.params.cuisine});
        return res.json(products);
    }
};
