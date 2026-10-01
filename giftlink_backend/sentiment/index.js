const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { sentiment } = req.body;
        if (!sentiment) {
            return res.status(400).json({ error: 'Sentiment text is required' });
        }
        res.status(200).json({ sentiment: 'positive', score: 0.9 });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;