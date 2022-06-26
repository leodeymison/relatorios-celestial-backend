import { Request, Response } from "express"
import { getAllModel, createModel, deleteModel, getOneModel, updateModel } from "../index.ds"
import Relatorio from "../../models/relatorio";

class discipuloController {
    async getAll(req:Request,res:Response):Promise<Response>{
        const relatorio = await getAllModel(Relatorio)
        return res.json(relatorio).status(200)
    }
    async getOne(req:Request,res:Response):Promise<Response>{
        const relatorio = await getOneModel(Relatorio, req.params.id)
        return res.json(relatorio).status(200)
    }
    async post(req:Request,res:Response):Promise<Response>{
        const relatorio = await createModel(Relatorio, req.body)
        return res.json(relatorio).status(200)
    }
    async put(req:Request,res:Response):Promise<Response>{
        const relatorio = await updateModel(Relatorio, req.params.id, req.body)
        return res.json(relatorio).status(200)
    }
    async delete(req:Request,res:Response):Promise<Response>{
        const relatorio = await deleteModel(Relatorio, req.params.id)
        return res.json(relatorio).status(200)
    }
}

export default new discipuloController