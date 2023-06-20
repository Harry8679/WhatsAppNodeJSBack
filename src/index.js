import dotenv from 'dotenv';
import app from './app.js';

// dotEnv config
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`WhatsApp web Application is running on the port ${PORT}`);
});