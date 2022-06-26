import { Schema, model } from "mongoose";

import { informationTypes } from "../types/informationTypes"

const InformationSchema = new Schema({
    nome_da_celula: String,
    lider: String,
    auxiliar: String,
    anfitriao: String,
    endereço:  String,
    telefone:  String,
    dia_da_celula:  String,
    supervisor:  String,
    telefone_do_supervisor: String,
    reuniao_com_supervisor: String,
    UserId: String,
},{
    timestamps:  true
})

export default model<informationTypes>('information', InformationSchema)