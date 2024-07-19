import { Router } from 'express';
import eventRoutes from './api/eventRoutes';
import betRoutes from './api/betRoutes';
import authRoutes from './api/authRoutes';

const router = Router();

router.use('/events', eventRoutes);
router.use('/bets', betRoutes);
router.use('/auth', authRoutes);

export default router;
