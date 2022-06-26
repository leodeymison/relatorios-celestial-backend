import { Request, Response } from "express"
import { getAllModel, createModel, deleteModel, getOneModel, updateModel } from "../index.ds"
import Informations from "../../models/information";

class informationController {
    async getAll(req:Request,res:Response):Promise<Response>{
        const information = await getAllModel(Informations)
        return res.json(information).status(200)
    }
    async getOne(req:Request,res:Response):Promise<Response>{
        const information = await getOneModel(Informations, req.params.id)
        return res.json(information).status(200)
    }
    async post(req:Request,res:Response):Promise<Response>{
        const information = await createModel(Informations, req.body)
        return res.json(information).status(200)
    }
    async put(req:Request,res:Response):Promise<Response>{
        const information = await updateModel(Informations, req.params.id, req.body)
        return res.json(information).status(200)
    }
    async delete(req:Request,res:Response):Promise<Response>{
        const information = await deleteModel(Informations, req.params.id)
        return res.json(information).status(200)
    }
}

export default new informationController