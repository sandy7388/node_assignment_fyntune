const Joi = require('joi');
module.exports.addUserValidation = async (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),
        mobile: Joi.string()
            .regex(/^[0-9]{10}$/).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .messages({'string.pattern.base': `Password must have maximum 30 character. it contains combination of numbers,uppercase,lowercase and $ as special character`})
            .required(),

    })

    return schema.validate(data);
}

module.exports.getUserValidation = async(data)=>{
    const schema = Joi.object({
        authorization: Joi.string()
            .required()
    })

    return schema.validate(data);
}