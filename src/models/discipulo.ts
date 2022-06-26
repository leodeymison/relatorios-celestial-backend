import { Schema, model } from "mongoose";

import { discipuloTypes } from "../types/discipuloTypes"


const DiscipuloSchema = new Schema({
    name: String,
    cargo: String,
    discipulador: String,
    image: String,
    nascimento: String,
    endereco: String,
    telefone: String,
    email: String,
    UserId: String,
},{
    timestamps:  true
})

export default model<discipuloTypes>('discipulo', DiscipuloSchema)