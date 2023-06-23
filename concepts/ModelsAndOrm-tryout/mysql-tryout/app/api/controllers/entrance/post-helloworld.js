module.exports = {
  friendlyName: 'Signup',

  description: 'Sign up for a new user account.',

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

  fn: async function ({ emailAddress }) {
    try {
      sails.log.info(JSON.stringify(emailAddress));

    } catch (error) {
      sails.log.error(error);
    }
  },
};
