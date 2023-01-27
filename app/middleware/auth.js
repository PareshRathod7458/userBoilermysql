const jwt = require('jsonwebtoken');
const config = require('config');
const { logger } = require('../logger/logger');

const generateAuthToken = (req,res,next)=>{
    const token = jwt.sign({email:req.body.email},config.get('jwtPrivateKey'));
  
    res.cookie("jwt",token,{
        expires: new Date(Date.now() + 300000000)
    });
    next();
}

const  auth = (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
       
        if(token == undefined){
            return res.send('not defined');
        }
       const decode = jwt.verify(token,config.get('jwtPrivateKey'));
       req.user = decode;
       next();
    }catch(err){
        logger.error('Error',err);
    }
}

module.exports = {
    generateAuthToken,
    auth
};
