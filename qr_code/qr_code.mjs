const QRCode = require("qrcode")
let data ={
    "name " : "Aup",
    "email": "amaanferoz@dor.com"
};
let stJson=JSON.stringify(data);
var anup=QRCode.toDataURL(stJson,function(err,code){
    if(err) return console.log('error');
    console.log(code);
});

