import { Router } from 'express';
import { getEvents } from '../../controllers/eventController';

const router = Router();

router.get('/', getEvents);

export default router;
