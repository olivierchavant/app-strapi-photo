module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48225e26ad30aa725741748faa69c993'),
  },
});
