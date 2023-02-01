const jwt = require('jsonwebtoken')

const unprotectedRoutes = [
    "/auth/register",
    "/auth/login",
    "/graphql"
];

const authenticate = async (req, res, next) => {
    console.log('Authentication middleware');
    console.log(req.cookies);

    
    try {
        const token = req.cookies?.jwtToken || ""
        const verified = await jwt.verify(token, process.env.JWT_SECRET);
        req.verifiedUser = verified.user;
        next()
    } catch(err) {

        if (unprotectedRoutes.includes(req.path)){
            next();
        } else {
            res.redirect("/auth/login");
        };
    }

};

module.exports = { authenticate }