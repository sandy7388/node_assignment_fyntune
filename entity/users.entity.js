const {
  Users
} = require('../schemas/usersSchema');
const apiController = require("../utility/apiController");
const tokenHelper = require('../utility/tokenHelper')
const {Log} = require('../schemas/logSchema')
const logger = require('../utility/logger');


module.exports.addUsers = async (data) => {
  const user = new Users({
    name: data.name,
    mobile: data.mobile,
    email: data.email,
    password: data.password,
  });
  try {
    let saved_data = await user.save();
    let token = await tokenHelper.generateToken(saved_data._id)
    const log = new Log({
      request: JSON.stringify(data),
      method: 'post',
      headers: '',
      response: token
    })
    await log.save();
    return apiController.respondPost(token);
  } catch (error) {
    logger.error(error)
    // logger('error',error)
    return apiController.respondError(error)
  }
}

module.exports.getUser = async (data) => {
  try {
    let response = await tokenHelper.validateToken(data)
    if (response.name == "JsonWebTokenError") {
      logger.error(response)
      return apiController.respondError(response)
    }
    const user = await Users.findOne({
      _id: response.data
    })
    if (user) {
      const log = new Log({
        request: "",
        method: 'get',
        headers: data,
        response: user
      })
      await log.save();
      return apiController.respondGet(user)
    } else apiController.respondGet({})
  } catch (error) {
    logger.error(error)
    return apiController.respondError(error)
  }

}