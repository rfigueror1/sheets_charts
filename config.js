const rc = require('rc')

module.exports = rc('app', {
  /* Development server config  */
  devServer: {
    port: process.env.SERVER_PORT || 3000,
    hostname: process.env.SERVER_HOSTNAME || 'localhost'
  },
  //api: process.env.API || 'http://v2intelapi.byprice.com/',
  api: process.env.API || 'http://dev.v2.intelapi.byprice.com',
  //api: process.env.API || 'http://in.byprice.com',
  // publicPath: process.env.PUBLIC_PATH || 'http://cmonsys.byprice.com/',
  publicPath: process.env.PUBLIC_PATH || 'http://localhost:5000',
  // smonc_api: process.env.SMONC_API || 'http://dev.gate.byprice.com/bpcmonsys',
  smonc_api: process.env.SMONC_API || 'http://localhost:8000',


})
