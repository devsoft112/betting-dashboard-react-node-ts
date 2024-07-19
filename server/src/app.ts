import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';

const app: Application = express();

app.use(bodyParser.json());

// Use central route handler
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

export default app;
