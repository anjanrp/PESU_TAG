var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/PESU-TAG";

const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = 2020;
const body=require('body-parser');

app.use(express.static('images'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'views'));

app.use('Express_Connnect',express.static('Express_Connnect'));

app.post('/',(req,res)=>{
    //res.sendFile(__dirname+'/home.html');
    var passowrd=req.body.PASSWORD;
    var srn=req.body.SRN;
    var data= {'SRN':srn,'PASSWORD':passowrd,'Amount':'0'};

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PESU-TAG");
        var myobj =data; dbo.collection("Student Info").insertOne(myobj, function(err,myobj) {
        if (err) throw err;
        console.log("1 document inserted"); db.close();
        }); });
        return res.sendFile(__dirname+'/navigate.html');

    
});

app.get('/',(req,res)=>{
    res.set({'Access-control-Allow-Origin':'*'});
    return res.sendFile(__dirname+'/home.html');
})

app.get('/about.html',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

app.get('/navigate.html',(req,res)=>{
    res.sendFile(__dirname+'/navigate.html');
});

app.get('/schedule.html',(req,res)=>{
    res.sendFile(__dirname+'/schedule.html');
});

app.get('/qr_code.html',(req,res)=>{
    res.sendFile(__dirname+'/qr_code.html');
});

app.post('/recharge.html',(req,res)=>{
    //res.sendFile(__dirname+'/recharge.html');

    var passowrd=req.body.PASSWORD;
    var srn=req.body.SRN;
    var amt = req.body.amt;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PESU-TAG");
        dbo.collection("Student Info").updateOne({'SRN':'PES1UG21CS068'}, {$set : {'Amount': '100'}},function(err,srn) {
        if (err) throw err;
        console.log("1 document inserted"); db.close();
        }); });
        return res.sendFile(__dirname+'/navigate.html');
});

app.get('/recharge.html',(req,res)=>{
    res.set({'Access-control-Allow-Origin':'*'});
    return res.sendFile(__dirname+'/recharge.html');
})

app.get('/spots.html',(req,res)=>{
    res.sendFile(__dirname+'/spots.html');
});

app.listen(port,()=>{
    console.log("Website is active on port 2020");
});