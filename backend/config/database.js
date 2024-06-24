const mongoose = require("mongoose");

const connectDatabase= ( )=>{

  mongoose.connect(process.env.DB_URI ,).then(
    (data)=>{
      // console.log(data);
      console.log("Mondo db connected with server" + data.connection.host);
    }
  )


}
module.exports  = connectDatabase ;