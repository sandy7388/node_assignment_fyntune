module.exports = {
  respondGet: function(data = null) {
    return this.respond({
      'success': true,
      'code': 200,
      'message': 'Ok',
      'data': data
    });
  },
  respondPost: function(data = null) {
    return this.respond({
      'success': true,
      'code': 201,
      'message': 'Created',
      'data': data
    });
  },
  respondPut: function(data = null) {
    return this.respond({
      'success': true,
      'code': 202,
      'message': 'Updated',
      'data': data
    });
  },
  respondDelete: function(message = 'Deleted') {
    return this.respond({
      'success': true,
      'code': 200,
      'message': message,
    });
  },
  respondBad: function(message = 'Bad Request') {
    return this.respond({
      'success': false,
      'code': 400,
      'message': message,
      'data': []
    });
  },
  respondNotFound: function(message = 'Not Found') {
    return this.respond({
      'success': false,
      'code': 404,
      'message': message,
      'data': []
    });
  },
  respondError: function(message = 'Internal Server Error') {
    return this.respond({
      'success': false,
      'code': 500,
      'message': message,
      'data': []
    });
  },
  respond : function (data){
    return data;
  }
}