const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    let criterio = {};
    if((req.query.monedaOrigen != null) && (req.query.monedaOrigen!="") && (req.query.monedaDestino != null) && (req.query.monedaDestino!="") ){
        criterio.monedaOrigen = req.query.monedaOrigen;
        criterio.monedaDestino = req.query.monedaDestino;
    }
    var transaccion = await Transaccion.find(criterio);
    res.json(transaccion);
}

transaccionCtrl.createTransaccion = async(req,res) => {
    var transaccion = new Transaccion(req.body);
    try{
       await transaccion.save();
       res.status(200).json({
           'status': '1',
           'msg':' Transaccion guardada.' 
       })
    } catch(error){
       res.status(400).json({
        'status':'0',
        'msg' : 'Error procesando operacion'
       })
    }
} 
transaccionCtrl.getTransaccionxCliente = async(req,res) => {
    var transacciones = await Transaccion.find({emailCliente:req.body.email});
    try{
      res.status(200).json(transacciones)
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg' : 'Error procesando operacion'
           })
    }
}

module.exports = transaccionCtrl;