import dotenv from 'dotenv';
import app from './app.js';

// dotEnv config
dotenv.config();

const PORT = process.env.PORT || 8000;
console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
    console.log(`WhatsApp web Application is running on the port ${PORT}`);
});