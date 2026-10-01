const natural = require('natural');

function analyzeSentiment(text) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text);
    // تحليل المشاعر البسيط
    return { sentiment: "positive", score: 0.8 };
}

module.exports = { analyzeSentiment };