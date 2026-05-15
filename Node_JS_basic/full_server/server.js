import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

// Link the routes router to the application
app.use('/', router);

app.listen(PORT);

// Export the app instance for testing purposes
export default app;
