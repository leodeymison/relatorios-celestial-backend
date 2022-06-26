import { Request, Response } from "express"
import { getAllModel, createModel, deleteModel, getOneModel, updateModel } from "../index.ds"
import Discipulo from "../../models/discipulo";

class discipuloController {
    async getAll(req:Request,res:Response):Promise<Response>{
        const discipulo = await getAllModel(Discipulo)
        return res.json(discipulo).status(200)
    }
    async getOne(req:Request,res:Response):Promise<Response>{
        const discipulo = await getOneModel(Discipulo, req.params.id)
        return res.json(discipulo).status(200)
    }
    async post(req:Request,res:Response):Promise<Response>{
        const discipulo = await createModel(Discipulo, req.body)
        return res.json(discipulo).status(200)
    }
    async put(req:Request,res:Response):Promise<Response>{
        const discipulo = await updateModel(Discipulo, req.params.id, req.body)
        return res.json(discipulo).status(200)
    }
    async delete(req:Request,res:Response):Promise<Response>{
        const discipulo = await deleteModel(Discipulo, req.params.id)
        return res.json(discipulo).status(200)
    }
}

export default new discipuloController