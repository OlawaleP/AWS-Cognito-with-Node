import { Router } from 'express';
const router = Router();
import * as User from '../controllers/user';
import * as Group from '../controllers/groups';
router.get('/home', (req, res) => {
    res.status(200).json({
        message: 'hey router buddy'
    })
})

router.post('/add-user', User.addUserInCognito);
router.post('/create-group', Group.createGroupInCognito);
router.post('/add-user-in-group', Group.addUserInCognitoGroup);
router.post('/user-login', User.userLogin);
router.post('/new-password-for-login', User.newPasswordRequiredForLogin);
router.post('/token-validation', User.accesstokenValidation);

export default router;