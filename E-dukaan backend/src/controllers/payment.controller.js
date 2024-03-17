const paymentService = require('../services/paymentService.js')
const createPaymentLink =  async (req,res)=>{
    // console.log(req.user);
    try{
        const paymentLink = await paymentService.createPaymentLink(  req.params.id) ;
        return res.status(200).send(paymentLink);
    }
    catch(error){
        console.log(error);
        return res.status(500).send(error.messsage);
    }
};

const updatePaymentInfo =  async (req,res)=>{
    try{
        await paymentService.updatePaymentInfo(req.query) ;
        return res.status(200).send({message : "Payment info updated" , success : true});
    }
    catch(error){
        return res.status(500).send(error.messsage);
    }
};

module.exports =  {createPaymentLink , updatePaymentInfo} ;