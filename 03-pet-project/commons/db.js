const low = require('lowdb')
const shortid = require('shortid')

const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({products: []})
  .write();

module.exports = db;