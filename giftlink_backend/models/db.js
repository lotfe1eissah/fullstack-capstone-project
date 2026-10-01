const { MongoClient } = require('mongodb');

let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }
    const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
    const dbName = "giftdb";

    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;