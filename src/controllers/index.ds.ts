import { Request } from "express";

export async function getAllModel(db:any){
    try{
        const users = await db.find()
        return users
    }
    catch (error) {
        console.log(error)
        return
    }
}
export async function getOneModel(db:any, id:string){
    try{
        const users = await db.findOne({
            where: {
                id: id
            }
        })
        return users
    }
    catch (error) {
        console.log(error)
        return
    }
}
export async function createModel(db:any, req:Request){
    try{
        const user = await db.create(req)
        return user
    }
    catch (error) {
        console.log(error)
        return
    }
}
export async function deleteModel(db:any, id:string){
    try{
        const user = await db.deleteOne({
            where: {
                id: id
            }
        })
        return user
    }
    catch (error) {
        console.log(error)
        return
    }
}
export async function updateModel(db:any, id:string, req:Request){
    try{
        const user = await db.updateOne({
            where: {
                id: id
            }
        }, {
            ...req
        })
        return user
    }
    catch (error) {
        console.log(error)
        return
    }
}