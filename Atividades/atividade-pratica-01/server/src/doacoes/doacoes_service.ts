import { Doacoes } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_Doacao (doacoes : Doacoes) : Promise <Doacoes>{
    return await prisma.doacoes.create ({
        data : doacoes
    })
}

export async function delete_Doacao (id : number) : Promise <void>{
    await prisma.doacoes.delete ({
        where : {id : id}
    })
}

export async function get_All_Doacao(): Promise <Doacoes[]>{
    return await prisma.doacoes.findMany()
    
}

export async function update_City_Doacao(doacoes : Doacoes, id : number) : Promise <void>{
    await prisma.doacoes.update({
        where : {id : id},
        data : doacoes
    })
}