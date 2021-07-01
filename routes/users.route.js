const router = require('express').Router();
const Users = require('../entity/users.entity')
const validation = require('../validations/user.validation')
const apiController = require("../utility/apiController");
const logger = require('../utility/logger')


// GET BACK THE Users
router.get('/myprofile', async (req, res) => {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const authorization = bearer[1];
    const {
      result,
      error
    } = await validation.getUserValidation({
      authorization: authorization
    })
    if (error) {
      logger.error(error)
      const response = apiController.respondError(error.details[0].message);
      return res.status(response.code).send(response);
    }
    const response = await Users.getUser(authorization);
    return res.status(response.code).send(response);
  } else {
    const response = apiController.respondError(error.details[0].message);
    return res.status(response.code).send(response);

  }

});

// SUBMIT THE Users
router.post("/registration", async (req, res) => {
  const {
    result,
    error
  } = await validation.addUserValidation(req.body)
  if (error) {
    logger('error',error)
    const response = apiController.respondError(error.details[0].message);
    return res.status(response.code).send(response);
  }
  const response = await Users.addUsers(req.body);
  return res.status(response.code).send(response);
});




module.exports = router;