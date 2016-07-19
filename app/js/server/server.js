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
        "DDatePeriod1=" + req.query.ddate + "&ADatePeriod1=" + req.query.adate + "&sort=PRICE&filter_ddate=%40&filter_adate=%40&ptype=ADT&Transfer_Type=" + (req.query.nonstoponly=="on"?"0":"-1") + "&" +
        "pageno=1&PartitionSearchToken=1&TransNo=20160711174016477&RouteToken=&ABTesting=M%3A31%2C160325_enf_aruii%3AB%3B&SubChannel=0&NonstopOnly=" + req.query.nonstoponly
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // from within the callback, write data to response, essentially returning it.
            res.send(JSON.parse(body)["FlightIntlAjaxResults"]);
        }
    })

});

app.get('/chat', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded; charset=utf-8'},
        url:     'http://www.tuling123.com/openapi/api?key=d4d223bfd1e3f4767d3ad5631a85a89b&info=' + encodeURI(req.query.info) + '&userid=' + req.query.session
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
        }
    })

});

app.listen(3000);
console.log('Listening on port 3000...');