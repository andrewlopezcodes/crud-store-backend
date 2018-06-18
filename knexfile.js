
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/crud-store'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
