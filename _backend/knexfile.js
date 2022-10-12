module.exports = {
  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '000914',
      insecureAuth: true,
      database : 'db'
    }
  }
};