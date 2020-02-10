import { Router } from 'express';
import User from '@controllers/user';

const router = Router();

router.post('/create', User.createUser);
router.post('/delete', User.deleteUser);
router.post('/update', User.updateUser);
router.post('/query', User.queryUser);

export default router;
