const productoCtrl = require('../controllers/producto.controller');

const express = require('express');

const router = express.Router();

router.get('/',productoCtrl.getProductos);
router.post('/',productoCtrl.createProducto);
router.delete('/:id',productoCtrl.deleteProducto);
router.put('/:id',productoCtrl.putProducto);
router.get('/destacados',productoCtrl.getProductosDestacados);
module.exports = router;
