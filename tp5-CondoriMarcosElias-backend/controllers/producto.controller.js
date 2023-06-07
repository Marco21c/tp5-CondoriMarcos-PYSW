const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async(req,res) => {
    var producto = new Producto(req.body);
    try{
       await producto.save();
       res.status(200).json({
           'status': '1',
           'msg':' Producto guardado.' 
       })
    } catch(error){
       res.status(400).json({
        'status':'0',
        'msg' : 'Error procesando operacion'
       })
    }
} 
productoCtrl.deleteProducto = async(req,res) => {
    try{
       await Producto.deleteOne({_id: req.params.id});
       res.status(200).json({
         'status':'1',
         'msg': 'Producto removido'
       })
    } catch (error){
       res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'            
       })
    }
}
productoCtrl.putProducto = async(req,res) => {
    var producto = new Producto(req.body);
    try{
      await Producto.updateOne({_id: req.params.id}, producto);
      res.status(200).json({
        'status': '1', 
        'msg': 'Producto actualizado'
      })
    } catch(error){
        res.status(400).json({
            'status': '0', 
            'msg': 'Error procesando la operacion'
        })
    }
}
productoCtrl.getProductosDestacados = async(req,res) => {
    var productos = await Producto.find({destacado:true});
    try{
       res.status(200).json(productos);  
    }catch(error){
        res.status(400).json({
            'status': '0', 
            'msg': 'Error procesando la operacion'
        })
    }
    
}
module.exports = productoCtrl;