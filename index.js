const server = require("./src/app");
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`App Running at ${PORT}`);
})