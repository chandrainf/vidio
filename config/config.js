const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "SDJF0W850FJ5LDFJ4095809DFJG045FG",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || 'sysadmin:YBc6bStzgNYMRgss@cluster0.sgrvx.gcp.mongodb.net') +
    '/mernmediastream',
  serverUrl: process.env.serverUrl || 'http://localhost:3000'
}

export default config
