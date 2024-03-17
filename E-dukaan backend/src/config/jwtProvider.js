const jwt = require('jsonwebtoken')
const SECRET_KEY = "vkjdrfbfjlnkldnsasnd";


const generateToken = (userId)=>{
    const token = jwt.sign({userId},SECRET_KEY);
    return token ;
}
const getUserIdFromToken =  (token)=>{
    const userData =  jwt.verify(token , SECRET_KEY);
    return userData.userId ;
}

module.exports = {generateToken , getUserIdFromToken};