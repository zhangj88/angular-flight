var express = require('express');
var request = require('request');



var app = express();

app.get('/flight/research', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded; charset=utf-8'},
        url:     'http://english.ctrip.com/flights/Ajax/First',
        body:    "MultDcity0=" + req.query.dcity + "&MultAcity0=" + req.query.acity + "&MultDDate0=" + req.query.ddate + "&MultDcity1=&MultAcity1=&MultDDate1=&" +
        "MultDcity2=&MultAcity2=&MultDDate2=&MultDcity3=&MultAcity3=&MultDDate3=&MultDcity4=&MultAcity4=&MultDDate4=&MultDcity5=&MultAcity5=&MultDDate5=&Search_FlightKey=&" +
        "FlightWay=" + req.query.flightway + "&DSeatClass=" + req.query.seatclass + "&DSeatSelect=" + req.query.seatclass + "&ChildType=ADT&Quantity=" + req.query.adult +
        "&ChildQty=" + req.query.child + "&BabyQty=0&AirlineChoice=&HomePortCode=&Dest1PortCode=&CurrentSeqNO=1&DCity=" + req.query.dcity + "&ACity=" + req.query.acity + "&" +
        "DDatePeriod1=" + req.query.ddate + "&ADatePeriod1=" + req.query.adate + "&sort=PRICE&filter_ddate=%40&filter_adate=%40&ptype=ADT&Transfer_Type=-1&" +
        "pageno=1&PartitionSearchToken=1&TransNo=20160711174016477&RouteToken=&ABTesting=M%3A31%2C160325_enf_aruii%3AB%3B&SubChannel=0"
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // from within the callback, write data to response, essentially returning it.
            res.send(JSON.parse(body)["FlightIntlAjaxResults"]);
        }
    })

});
app.get('/wines', function(req, res) {
    res.send({id:req.query.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');