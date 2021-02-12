import { Router } from 'express'
import controller from '../controllers/main'

const router = Router()

router.get('/', controller.home.bind(controller))

export default router