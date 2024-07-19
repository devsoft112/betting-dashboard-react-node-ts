import { AuthenticatedRequest } from '../middlewares/authenticate';
import { JwtPayload } from 'jsonwebtoken';
import { Response } from 'express';
import Bet from '../models/Bet';
import SportEvent from '../models/SportEvent';
import User from '../models/User';


interface JwtPayloadWithUserId extends JwtPayload {
    userId: number;
}

export const placeBet = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { user_id, event_id, amount, bet_type } = req.body;
    try {
        const event = await SportEvent.findByPk(event_id);
        if (!event) {
            res.status(404).json({ message: 'Event not found' });
            return;
        }

        const user = await User.findByPk(user_id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        let odds;
        switch (bet_type) {
            case 'win':
                odds = event.odds_win;
                break;
            case 'draw':
                odds = event.odds_draw;
                break;
            case 'lose':
                odds = event.odds_lose;
                break;
            default:
                res.status(400).json({ message: 'Invalid bet type' });
                return;
        }

        const potential_payout = amount * odds;
        const bet = await Bet.create({ user_id, event_id, amount, bet_type, odds, potential_payout });
        res.status(201).json(bet);
    } catch (error) {
        console.error('Error placing bet:', error);
        res.status(500).json({ message: 'Error placing bet' });
    }
};

export const getBets = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
        if (!req.user || typeof req.user === 'string') {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const userId = (req.user as JwtPayloadWithUserId).userId;

        const bets = await Bet.findAll({ where: { user_id: userId } });
        res.status(200).json(bets);
    } catch (error) {
        console.error('Error fetching bets:', error);
        res.status(500).json({ message: 'Error fetching bets' });
    }
};
