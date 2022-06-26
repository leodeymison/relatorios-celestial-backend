import { Schema, model } from "mongoose";

import { relatorioTypes } from "../types/relatorioTypes"

const RelatorioSchema = new Schema({
    dataName: String,
    chamada: [{
        name: String,
        presenca: [String],
        discipulador: String,
    }],
    dataReuniao: [String],
    oferta: [Number],
    ofertaTotal: Number,
    visitante: [{
        semana: String,
        nomes: [String]
    }],
    visitasNoMes: [String],
    notas: String,
    UserId: String,
},{
    timestamps:  true
})

export default model<relatorioTypes>('relatorio', RelatorioSchema)