const QRCode = require("qrcode")
//import QRCode from '/Users/anjan/Documents/Web_Tech_Project/navigate/node_modules/qrcode/bin';
const {useState} =QRCode;
let data ={
    "SRN":"PES1UG21CS068",
    "AMOUNT":"100"
};
let stJson=JSON.stringify(data);
var anup=QRCode.toDataURL(stJson,function(err,code){
    if(err) return console.log('error');
    console.log(code);
});

