const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  request: {
    type: String,
    require: true
  },
  method: {
    type: String,
    require: true
  },
  headers: {
    type: String,
    require: true
  },
  response: {
    type: String,
    require: true
  }
});

const Log = mongoose.model('api_logs', logSchema)
exports.Log = Log

exports.logSchema = logSchema