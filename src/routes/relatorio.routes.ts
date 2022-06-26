import express from "express"
const router = express.Router()

import relatorioController from "../controllers/Relatorio/relatorio.controller"

router.get('/relatorios', relatorioController.getAll)
router.get('/relatorios/:id', relatorioController.getOne)
router.post('/relatorios', relatorioController.post)
router.delete('/relatorios/:id', relatorioController.delete)
router.put('/relatorios/:id', relatorioController.put)


export default router