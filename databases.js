var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/PESU-TAG";
/*
function st_database(require)
{
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PESU-TAG");
        var myobj = { SRN: "PES1", Password: "PES12378" }; dbo.collection("Student Info").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted"); db.close();
        }); });
        
}
*/

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PESU-TAG");
    var myobj = {Spots_Car:50 , Spots_Bike_Front_Gate:20 , Spots_Bike_Back_Gate : 40 }; dbo.collection("Parking Status").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"); db.close();
    }); });
