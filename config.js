var path = require('path');
var config = {
  config:{
    db_dir:'../db_express',
    winston_dir:'../db_express/winston',
    morgan_dir:'../db_express/morgan',
    defaultValue:'123456',
    defaultEmail: '@gmail.com', // You can change to your own email-server
    // for user password. this is fixed because this project hasn't had function to send email yet.
    auth_api:'https://auth-api.example.login'
  },
  defaultUser:{
    username:'tuan.nguyenminh',
    password:'$2a$10$bVj26uFKSmfo1Tgs65TxIOx/kOFHEAawoc11zFXVZY.yDum/XPAtm', // mean '123456'
    displayName:'Minh Tuan',
    emails:'ntuan221@gmail.com',
    role:'admin'
  },
  listpermit: [
    'admin'
  ],
  database:{
    db: "sqlite",
    dbName: 'database.sqlite',
    Url:'' // if not sqlite please specify all Url
  }
}
const db_dir = path.resolve(__dirname, config.config.db_dir);
if (config.database.db == "sqlite") {
  config.database.Url = config.database.db + ':' + db_dir + '/'+ config.database.dbName
} 

module.exports = config;
