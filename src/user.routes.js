import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

import userController from './controllers/user.controller';
import {getUser, addUser, updateUser, removeUser} from './user.schemas';

const router = express.Router();


router.get('/all', userController.getAllUsers);

router.get(
    '/:id',
    expressYupMiddleware({
        schemaValidator: getUser
    }),
    userController.getUser
);

router.post(
    '/',
    expressYupMiddleware({
        schemaValidator: addUser
    }),
    userController.addUser
);

router.put(
    '/:id',
    expressYupMiddleware({ schemaValidator: updateUser }),
    userController.updateUser
);

router.delete(
    '/:id',
    expressYupMiddleware({ schemaValidator: removeUser }),
    userController.removeUser
);

export default router;
