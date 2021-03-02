const ping = require('ping');

mainFunction = async (URI) => {
    ping.promise.probe(URI).then((res) => {
        console.log(res.time);
				console.log(res)
    });
    return 0;
};

mainFunction("sgp-2.valve.net");
// setInterval(function() {mainFunction('sgp-2.valve.net')}, 1000);
// setInterval(function() {mainFunction('google.com')}, 1000);
