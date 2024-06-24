const app = require("./app");

const dotenv = require("dotenv") ;

//handling uncaught errors
process.on("uncaughtException" , (err)=>{
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise rejections`);
  process.exit(1);
})

dotenv.config ( { path : "backend/config/config.env" })

const connectDatabase = require("./config/database");

connectDatabase();
const server = app.listen(process.env.PORT , ()=>{
  console.log(`Server working on port ${process.env.PORT}`)
})


// Unhandled promise rejections
process.on("unhandledRejection" , err =>{
  console.log(err.message);
  console.log("shutting down server");
  server.close(()=>{
    process.exit();
  });
})