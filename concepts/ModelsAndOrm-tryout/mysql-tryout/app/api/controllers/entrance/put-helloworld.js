module.exports = {
  friendlyName: 'PutHelloworld',
  description: 'Put request helloworld.',
  extendedDescription: `helloworld post request`,

  inputs: {
    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },
  },

  exits: {
    success: {
      viewTemplatePath: 'pages/entrance/helloworld',
    },
  },

  fn: async function (req) {
    try {
      sails.log.info(JSON.stringify(req));

    } catch (error) {
      sails.log.error(error);
    }
  },
};
