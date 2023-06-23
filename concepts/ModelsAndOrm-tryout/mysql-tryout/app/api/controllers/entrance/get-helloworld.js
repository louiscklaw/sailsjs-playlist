module.exports = {
  friendlyName: 'get-helloworld',
  description: 'helloworld .',
  extendedDescription: `hello description`,

  inputs: {},

  exits: {
    success: {
      description: 'New user account was created successfully.',
    },
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription:
        'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.',
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function ({}) {
    sails.log.info('get helloworld');
  },
};
