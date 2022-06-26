import express from "express"
const router = express.Router()

import userController from "../controllers/User/user.controller"
import { userValidator, userPermission } from "../controllers/User/user.validator"

router.get('/users', userPermission, userValidator, userController.getAll)
router.get('/users/:id', userPermission, userValidator, userController.getOne)
router.post('/users', userPermission, userValidator, userController.post)
router.delete('/users/:id', userPermission, userValidator, userController.delete)
router.put('/users/:id', userPermission, userValidator, userController.put)


export default router