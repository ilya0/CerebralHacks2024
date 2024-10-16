// This is a simplified example using Express.js
const express = require('express');
const app = express();
const openai = require('openai');

app.use(express.static(__dirname));

// openai.apiKey = ''; // Replace with your actual API key

app.post('/get-response', async (req, res) => {
  const message = req.body.message;
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: message,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.7,
    });
    res.json({ response: response.choices[0].text.trim() });
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    res.status(500).json({ error: 'An error occurred while fetching the response.' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
