const whitelist = ['https://msk23.ru']
const corsOptionsDelegate =  (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

module.exports = {
  port: 3007,
  corsOpt: process.env.NODE_ENV === 'production' ? corsOptionsDelegate : {},
}