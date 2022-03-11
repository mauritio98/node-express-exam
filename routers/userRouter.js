import Router from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.use((req, res, next) => {
    console.log('userRouter');
    next();
})



router.route('/register')
    .post(userController.registerUser);

export default router;