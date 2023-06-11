const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.createTicket = async(req,res) => {
   var ticket = new Ticket(req.body);
   try{
      await ticket.save();
      res.status(200).json({
         'status': '1',
         'msg': 'Se creo un ticket.'
      });
   }catch(error){
      res.status(400).json({
         'status':'0',
         'msg':'error en el proceso.'        
      })
   }
}
ticketCtrl.getTickets = async(req,res) => {
    let criterio = {};
    if((req.query.categoriaEspectador != null) && (req.query.categoriaEspectador!="")){
        criterio.categoriaEspectador = req.query.categoriaEspectador;
    }
       
    var tickets = await Ticket.find(criterio).populate("espectador");
    res.json(tickets);
}
ticketCtrl.deleteTicket = async(req,res) => {
    try{
        await Ticket.deleteOne({_id: req.params.id});
        res.status(200).json({
          'status':'1',
          'msg': 'Ticket removido'
        })
     } catch (error){
        res.status(400).json({
             'status': '0',
             'msg': 'Error procesando la operacion'            
        })
     }
 }

ticketCtrl.putTicket = async(req,res) => {
    var ticket = new Ticket(req.body);
    try{
      await Ticket.updateOne({_id: req.params.id}, ticket);
      res.status(200).json({
        'status': '1', 
        'msg': 'Ticket actualizado'
      })
    } catch(error){
        res.status(400).json({
            'status': '0', 
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getTicket = async(req,res) => {
    try{
        const ticket = await Ticket.findById(req.params.id).populate("espectador");    
        res.json(ticket);
    }catch(error){
            res.status(400).json({
                'status':'0',
                'msg':'Error en la operacion'
            });
    }
}

module.exports = ticketCtrl;