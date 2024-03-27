require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    if(!db) {
        const conn = await client.connect();
        db = conn.db(process.env.DATABASE)
        console.log('Connected to MongoDB');
    }
    return db
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connectDB };