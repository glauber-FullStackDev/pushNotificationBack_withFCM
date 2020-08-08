import { Router } from 'express';

import {
    sendMultPush,
    sendSinglePush
} from '../services/pushNotification.handler';

const router: Router = Router();

router.post('/sendSingle', sendSinglePush);
router.post('/sendMult', sendMultPush);

export default router;