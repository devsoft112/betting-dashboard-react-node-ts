import { Router } from 'express';
import { getEvents } from '../../controllers/eventController';
import authenticate from '../../middlewares/authenticate';

const router = Router();

router.get('/', authenticate, getEvents);

export default router;
