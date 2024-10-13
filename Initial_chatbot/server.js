// This is a simplified example using Express.js
const express = require('express');
const app = express();

const openai = require('openai');
openai.apiKey = 'Ysk-admin-NhOJreNOcfUmczmDJeCmX36IcZJAsqm06esNJ29D890A0Nr5ldvcjY_uCKT3BlbkFJq77TR1hadVmF42LkU2_ru8yLgRJWSjl6ylQi6Zo49TFYpQ1z2KJiddyjQA'; // Replace with your actual API key

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
