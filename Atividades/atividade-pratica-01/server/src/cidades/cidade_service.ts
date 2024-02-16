import { Cidades } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_City (cidade : Cidades) : Promise <Cidades>{
    return await prisma.cidades.create ({
        data : cidade
    })
}

export async function delete_City (id : number) : Promise <void>{
    await prisma.cidades.delete ({
        where : {id : id}
    })
}

export async function get_All_Cities(id: number): Promise <Cidades[]>{
    return await prisma.cidades.findMany({
        where : {estado_id : id}
    })
}

export async function get_All_Cities_by_Name(nome: string) : Promise <Cidades[]>{
    return await prisma.cidades.findMany({
        where : {nome : nome}
    })
}

export async function update_City(cidade : Cidades, id : number) : Promise <void>{
    await prisma.cidades.update({
        where : {id : id},
        data : cidade
    })
}