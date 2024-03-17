const Address = require("../models/address.model");
const getAddressById  = async (req, res)=>{
    try{
        const addressId = req.params.addressId ;
        const address = await Address.findById({_id : addressId});
        console.log(address);
        return res.status(200).send(address) ;
    }   
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {getAddressById} ;