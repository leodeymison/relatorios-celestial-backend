import express from "express"
const router = express.Router()

import discipuloController from "../controllers/Discipulo/discipulo.controller"

router.get('/discipulos', discipuloController.getAll)
router.get('/discipulos/:id', discipuloController.getOne)
router.post('/discipulos', discipuloController.post)
router.delete('/discipulos/:id', discipuloController.delete)
router.put('/discipulos/:id', discipuloController.put)


export default router