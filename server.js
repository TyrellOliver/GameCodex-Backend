const app = require('./app');

//Configuration
require('dotenv').config();
const {PORT} = process.env;

// Listen
app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
});