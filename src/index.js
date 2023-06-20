import dotenv from 'dotenv';
import app from './app.js';
import logger from './config/logger.config.js';
// const logger = require('./config/logger.config.js');

// dotEnv config
dotenv.config();

const PORT = process.env.PORT || 8000;
console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
    logger.info(`WhatsApp web Application is running on the port ${PORT}`);
});