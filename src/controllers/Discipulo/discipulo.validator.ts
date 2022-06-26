import { Request, Response, NextFunction } from "express";

export function userValidator(req:Request,res:Response,next:NextFunction){
    next();
};
export function userPermission(req:Request,res:Response,next:NextFunction){
    next();
};