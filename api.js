const deezer = require("api-deezer");
 
async function start(){
    await deezer.login().catch((e)=>console.error(e));
    /*
    login process:
    deezer.login() will ask you to visit a url from a browser so that you can connect to deezer with your customer IDs
    */
    console.log(await deezer.get("user"))  //returns user information
}
start();