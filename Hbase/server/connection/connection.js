const hbase = require('hbase')
const client = hbase({
  host: 'localhost',
  port: 8080
})

module.exports = Connection;