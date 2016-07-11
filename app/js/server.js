var express = require('express');
var request = require('request');



var app = express();

app.get('/flight/research', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded; charset=utf-8'},
        url:     'http://english.ctrip.com/flights/Ajax/First',
        body:    "MultDcity0=SHA&MultAcity0=PAR&MultDDate0=2016-07-20&MultDcity1=&MultAcity1=&MultDDate1=&MultDcity2=&MultAcity2=&MultDDate2=&MultDcity3=&MultAcity3=&MultDDate3=&MultDcity4=&MultAcity4=&MultDDate4=&MultDcity5=&MultAcity5=&MultDDate5=&Search_FlightKey=&FlightWay=RT&DSeatClass=Y&DSeatSelect=Y&ChildType=ADT&Quantity=1&ChildQty=0&BabyQty=0&AirlineChoice=&HomePortCode=&Dest1PortCode=&CurrentSeqNO=1&DCity=SHA&ACity=PAR&DDatePeriod1=2016-07-20&ADatePeriod1=2016-08-09&sort=PRICE&filter_ddate=%40&filter_adate=%40&ptype=ADT&Transfer_Type=-1&pageno=1&PartitionSearchToken=1&TransNo=20160711174016477&RouteToken=&ABTesting=M%3A31%2C160325_enf_aruii%3AB%3B&SubChannel=0"
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // from within the callback, write data to response, essentially returning it.
            res.send(JSON.parse(body)["FlightIntlAjaxResults"]);
        }
    })

});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');