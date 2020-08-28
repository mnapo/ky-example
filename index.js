const ky = require("ky-universal");

const main = async () =>{
    try{
        var clients = await ky.get("http://localhost:8000/clients").json();
        console.log(clients);
    }catch(e){
        console.log(e);
    }
}

main();