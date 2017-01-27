/*jshint esversion: 6 */

const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a :{
      demand:true,
      alias:'address',
      describe: 'endereco weather api google',
      string:true
    }
})
.help()
.alias('help','h')
.argv;

var encodeAddress =encodeURIComponent(argv.address);
console.log(encodeURIComponent(argv.a));

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      console.log("Nao foi possivel conectar ao servidor do google");
    } else if(body.status === "ZERO_RESULTS"){
      console.log("Nao foi possivel encontrar o endereco");
    }else if(body.status === "OK"){
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    }

});
