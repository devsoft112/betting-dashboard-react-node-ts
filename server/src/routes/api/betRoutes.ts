import { Router } from 'express';
import { placeBet, getBets } from '../../controllers/betController';
import authenticate from '../../middlewares/authenticate';

const router = Router();

router.post('/', authenticate, placeBet);
router.get('/', authenticate, getBets);

export default router;
