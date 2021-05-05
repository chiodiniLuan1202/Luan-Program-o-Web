const hbase = require('hbase')

client = hbase({ host: '127.0.0.1', port: 8080 })

client
.table('my_table' )
.create('my_column_family', function(err, success){

  client
  .table('my_table' )
  .row('my_row')
  .put('my_column_family:my_column', 'my value', function(err, success){
 
    client
    .table('my_table' )
    .row('my_row')
    .get('my_column_family', function(err, [cell]){

      assert(cell.key, 'my_row')
      assert(cell.column, 'my_column_family:my_column')
      assert(cell.$, 'my value')
    })
  })
})