type chamadaTypes = {
    name: string;
    presenca: string[];
    discipulador: string;
}
type visitanteTypes = {
    semana: string,
    nomes: string[]
}
export type relatorioTypes = {
    dataName: string;
    chamada: chamadaTypes[];
    dataReuniao: string[];
    oferta: number[];
    ofertaTotal: number,
    visitante: visitanteTypes[],
    visitasNoMes: string[],
    notas: string,
    UserId: String,
}