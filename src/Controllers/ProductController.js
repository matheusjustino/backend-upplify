const axios = require('axios');
const Product = require('../model/Product');

module.exports = {

    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    }
};
