const Espectador = require('../models/espectador')
const espectadorCtrl = {}

espectadorCtrl.getEspectadores = async(req,res) => {
     var espectadores = await Espectador.find();
     res.json(espectadores);
}

espectadorCtrl.createEspectador = async(req,res) => {
   var espectador = new Espectador(req.body);
   try{
      await espectador.save();
      res.status(200).json({
         'status': '1',
         'msg': 'Se agrego un espectador.'
      });
   }catch(error){
      res.status(400).json({
         'status':'0',
         'msg':'error en el proceso.'        
      })
   }
}

espectadorCtrl.getEspectador = async (req, res) => {
    try{
    const espectador = await Espectador.findById(req.params.id);    
    res.json(espectador);
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error en la operacion'
        });
    }
}

module.exports = espectadorCtrl;