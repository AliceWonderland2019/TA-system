module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host : 'localhost',
      port : 3308,
      user : 'root',
      password : '123456',
      insecureAuth: true,
      database : 'db'
    }
  }
};