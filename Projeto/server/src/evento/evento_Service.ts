import { evento } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_Evento (evento : evento) : Promise <evento>{
    return await prisma.evento.create ({
        data : evento
    })
}

export async function delete_Evento (id : number) : Promise <void>{
    await prisma.evento.delete ({
        where : {id : id}
    })
}

export async function get_All_Evento(): Promise <evento[]>{
    return await prisma.evento.findMany()

}

export async function update_Evento(evento : evento, id : number) : Promise <void>{
    await prisma.evento.update({
        where : {id : id},
        data : evento
    })
}

export async function get_All_Eventos_by_Name(nome: string) : Promise <evento[]>{
    return await prisma.evento.findMany({
        where : {nome : nome}
    })
}