const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectToDatabase = require('./models/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToDatabase().then(() => {
    console.log('Connected to DB successfully');
}).catch((err) => {
    console.error('Failed to connect to database', err);
});

const authRoutes = require('./routes/authRoutes');
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);

app.get('/', (req, res) => {
    res.send('GiftLink API is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});