import express from "express"
const router = express.Router()

import informationController from "../controllers/Information/information.controller"

router.get('/informations', informationController.getAll)
router.get('/informations/:id', informationController.getOne)
router.post('/informations', informationController.post)
router.delete('/informations/:id', informationController.delete)
router.put('/informations/:id', informationController.put)


export default router