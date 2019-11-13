import { Router } from 'express';
import PageController from '../controllers/IndexController';

const controller = new PageController();
const router = Router();

router.get('/', controller.index.bind(controller));

export default router;