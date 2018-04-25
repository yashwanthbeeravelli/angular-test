module.exports = {
  LOCAL: {
    staticResourceCache: { maxAge: 0, etag: false },
  },

  DEVELOPMENT: {
    staticResourceCache: { maxAge: 0, etag: false },
  },

  STAGING: {
    staticResourceCache: { maxAge: 0, etag: false },
  },

  PRODUCTION: {
    staticResourceCache: { maxAge: '1d', etag: true },
  },
};
