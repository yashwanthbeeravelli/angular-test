module.exports = {
  moduleName: 'app',

  environments: {
    LOCAL: {
      baseUrl: 'http://localhost:3000',
    },

    DEVELOPMENT: {
      baseUrl: 'https://portal-dev.quickseries.com',
    },

    STAGING: {
      baseUrl: 'https://portal-staging.quickseries.com',
    },

    PRODUCTION: {
      baseUrl: 'https://portal.quickseries.com',
    },
  },

  root: {
    src: './client/app',
    dist: './client/dist',
  },

  tasks: {
    webpack: {
      src: 'app',
      entry: 'app.ts',
      js: {
        dist: 'js',
      },

      css: {
        dist: 'css',
      },

      fonts: {
        dist: 'fonts',
      },

      images: {
        dist: 'images',
      },

      branding: {
        src: 'scss',
      },
    },
  },
};
