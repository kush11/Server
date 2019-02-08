const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const {databasePassword,databaseUserName} = require('../config')
mongoose.connect(`mongodb://${databaseUserName}:${databasePassword}@ds117834.mlab.com:17834/auth`).then(()=>{
    console.log("Database Connected");
}).catch(err=>{
    console.log(err)
})

module.export=mongoose;