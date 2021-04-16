import { Router } from 'express'
import MainController from '../controllers/MainController'

const router = Router()
const controller = new MainController()

router.get('/', controller.main.bind(controller))

export default router