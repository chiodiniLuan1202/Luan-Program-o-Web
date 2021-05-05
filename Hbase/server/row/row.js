
const client = new hbase.Client({})
const myRow = new hbase.Row(client, 'my_table', 'my_row')



myRow.get([column], [options], callback)

hbase()
.table('my_table')
.row('my_row')
.get('my_column_family', {from: 1285942515900}, (error, value) => {
  console.info(value)
})


hbase()
table('my_table')
.row('my_row')
.get('my_column_family:my_column', (error, value) => {
  assert.strictEqual(404, error.code)
  assert.strictEqual(null, value)
}),

hbase()
table('my_table')
.row('my_key_*')
.get('my_column_family:my_column', (error, value) => {
  console.info(value)
}),

myRow.put(column, data, [timestamp], callback)

hbase()
.table('my_table')
.row('my_row')
.put('my_column_family:my_column', 'my value', (error, success) => {
  assert.strictEqual(true, success)
})

myRow.delete([column], callback);

hbase()
.table('my_table')
.row('my_row')
.delete((error, success) => {
  assert.strictEqual(true, success)
})

hbase()
.table('my_table')
.row('my_row')
.delete('my_column_family:my_column', (error, success) => {
  assert.strictEqual(true, success)
})

module.exports =row;