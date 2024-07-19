import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/secrets';

export interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default authenticate;
