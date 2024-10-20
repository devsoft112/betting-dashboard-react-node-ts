import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';

const app: Application = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Update this to your frontend URL
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Use central route handler
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

export default app;
