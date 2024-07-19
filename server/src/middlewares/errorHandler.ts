import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
