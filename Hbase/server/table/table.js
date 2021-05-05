const client = new hbase.Client({})
const myTable = new hbase.Table(client, 'my_table')

myTable.create(callback);

hbase()
.table('my_table')
.create('my_new_row', function(error, success){
  console.info('Table created: ' + (success ? 'yes' : 'no'))
} );

hbase()
.table('my_table')
.create({
  IS_META: false,
  IS_ROOT: false,
  COLUMNS: [{
    NAME: 'minha_nova_column'
  }]
}, (error, success) => {
  console.info('Table created: ' + (success ? 'yes' : 'no'))
})

myTable.delete(callback);

hbase()
.table('my_table')
.delete((error, success) => {
  assert.ok(success)
})

myTable.exists(calblack)

hbase()
.table( 'my_new_table' )
.schema(function(error, schema){
  console.info(schema)
});

module.exports=table;