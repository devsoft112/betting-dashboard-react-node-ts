import { Request, Response } from 'express';
import SportEvent from '../models/SportEvent';

export const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events = await SportEvent.findAll();
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching sports events:', error);
        res.status(500).json({ message: 'Error fetching sports events' });
    }
};
