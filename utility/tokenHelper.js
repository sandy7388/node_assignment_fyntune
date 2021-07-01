const jwt = require('jsonwebtoken')

module.exports.generateToken = async(data)=>{
    return jwt.sign({data},process.env.SECRET_KEY);
}

module.exports.validateToken = async(token)=>{
    return jwt.verify(token,process.env.SECRET_KEY,(err,token)=>{
        if(err)return err
        return token
    })
}