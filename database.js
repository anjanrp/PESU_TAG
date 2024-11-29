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

function st_database(require)
{
var passowrd=req.body.PASSWORD;
    var srn=req.body.SRN;
    var amt = req.body.amt;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("PESU-TAG");
        dbo.collection("Student Info").updateOne({'SRN':srn}, {$set : {'Amount': amt}},function(err,srn) {
        if (err) throw err;
        console.log("1 document inserted"); db.close();
        }); });
}

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("PESU-TAG");
    var myobj = {time:"8:50" }; dbo.collection("Bus Schedule").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted"); db.close();
    }); });
