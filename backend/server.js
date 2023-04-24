//setting lib variables
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");

// config
dotenv.config({path:"backend/config/config.env"});
 //this is the change pranav

//connect database
connectDatabase();

//listening to port 3000
app.listen(process.env.PORT, () => {
    console.log("server running at ", process.env.PORT);
})