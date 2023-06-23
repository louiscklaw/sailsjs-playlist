module.exports = {
  friendlyName: 'View helloworld',

  description: 'Display "Helloworld" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/entrance/form-post-helloworld',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect',
    },
  },

  fn: async function () {
    if (this.req.me) {
      throw { redirect: '/' };
    }

    return {};
  },
};
