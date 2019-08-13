const express = require('express');
const ProductController = require('./Controllers/ProductController');

const routes = express.Router();

routes.get('/', ProductController.index);

module.exports = routes;