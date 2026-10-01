const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const { name, category, condition } = req.query;
        let query = {};
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        if (category) {
            query.category = category;
        }
        if (condition) {
            query.condition = condition;
        }
        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;