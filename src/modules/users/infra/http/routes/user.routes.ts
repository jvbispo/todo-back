import { Router } from 'express';
import UsersController from '../controllers/UsersController';

import authMiddlware from '../middlwares/authMiddlware';

const usersRouter = Router();
const usersController = new UsersController();
usersRouter.post('/',usersController.create);


export default usersRouter;
