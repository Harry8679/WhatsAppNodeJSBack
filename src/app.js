import express from 'express';

// Create an Express App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Server');
});

export default app;