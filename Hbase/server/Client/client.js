const hbase = require('hbase')
const client = hbase({ options })


client.tables((error, tables) => {
    console.info(tables)
  });

module.exports = Client;