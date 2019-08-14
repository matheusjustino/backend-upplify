const express = require('express');
const ProductController = require('./Controllers/ProductController');

const routes = express.Router();

routes.get('/', ProductController.index);
routes.get('/:cuisine', ProductController.index2)

module.exports = routes;