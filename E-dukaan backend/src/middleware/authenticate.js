const jwtProvider = require('../config/jwtProvider.js');
const { getUserById } = require('../services/user.services');
const authenticate = async (req, res, next) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        // console.log(jwt);
        if (!jwt) {
            return res.status(404).send({ error: "No token found" })
        }
        const userId = jwtProvider.getUserIdFromToken(jwt);
        // console.log(userId);
        const user = await getUserById(userId);
        req.user = user;
        // console.log(req.user);
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();
}

module.exports = authenticate;