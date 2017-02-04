var moment = require('moment');

console.log(moment().format());

//unix time stamps

//January 1st 1970 @ 12:00am -> 0

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1486246979;

var currentMoment = moment.unix(timestamp);

console.log('current moment',currentMoment.format());