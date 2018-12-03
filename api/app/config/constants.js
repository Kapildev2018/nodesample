const prodConfig = {  
  MONGO_URL: 'mongodb://apiuser:Bambu2018@localhost:27017/subscribers',
};



function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

module.exports = envConfig();