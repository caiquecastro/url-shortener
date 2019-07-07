module.exports = {
  database: {
    client: "mysql",
    connection: process.env.DB_CONNECTION,
    useNullAsDefault: true
  }
};
