import { Request, Response } from "express"
import { getAllModel, createModel, deleteModel, getOneModel, updateModel } from "../index.ds"
import User from "../../models/user";

class userController {
    async getAll(req:Request,res:Response):Promise<Response>{
        const user = await getAllModel(User)
        return res.json(user).status(200)
    }
    async getOne(req:Request,res:Response):Promise<Response>{
        const user = await getOneModel(User, req.params.id)
        return res.json(user).status(200)
    }
    async post(req:Request,res:Response):Promise<Response>{
        const user = await createModel(User, req.body)
        return res.json(user).status(200)
    }
    async put(req:Request,res:Response):Promise<Response>{
        const user = await updateModel(User, req.params.id, req.body)
        return res.json(user).status(200)
    }
    async delete(req:Request,res:Response):Promise<Response>{
        const user = await deleteModel(User, req.params.id)
        return res.json(user).status(200)
    }
}

export default new userController