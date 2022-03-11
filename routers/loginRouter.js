import Router from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.use((req, res, next) => {
    console.log('loginRouter');
    next();
})



router.route('/login')
    .post(userController.loginUser);

export default router;