
var dns = require('dns-sync');
var os = require('os');

/**
 * Retrive IP address.
 */
module.exports = dns.lookup(os.hostname());
