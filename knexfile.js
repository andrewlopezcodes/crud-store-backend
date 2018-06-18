
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/andrewlopezcodes-store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
