
var environment = GLOBAL.environment = {};

environment.ip = require('./ip');
environment.isHost = environment.ip.match(/127\.0\.[01]\.1/);
environment.isVM = !environment.isHost;

module.exports = environment;
