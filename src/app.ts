import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

// Routers
import userRouter from "./routes/user.routes";
import discipuloRouter from "./routes/discipulo.routes";
import informationRouter from "./routes/information.routes";
import relatorioRouter from "./routes/relatorio.routes";



class App {
    public express:express.Application

    public constructor(){
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void{
        this.express.use(express.json())
        this.express.use(cors())
    }
    private database ():void {
        mongoose.connect('mongodb://localhost:27017/relatorios')
    }
    private routes ():void {
        this.express.use("/api", userRouter)
        this.express.use("/api", discipuloRouter)
        this.express.use("/api", informationRouter)
        this.express.use("/api", relatorioRouter)
    }
}

export default new App().express