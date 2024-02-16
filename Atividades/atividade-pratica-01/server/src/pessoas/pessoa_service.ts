import { Pessoas } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_Pessoa (pessoas : Pessoas) : Promise <Pessoas>{
    return await prisma.pessoas.create ({
        data : pessoas
    })
}

export async function delete_Pessoa (id : number) : Promise <void>{
    await prisma.pessoas.delete ({
        where : {id : id}
    })
}

export async function get_All_Pessoa(): Promise <Pessoas[]>{
    return await prisma.pessoas.findMany()
    
}

export async function update_Pessoa(pessoas : Pessoas, id : number) : Promise <void>{
    await prisma.pessoas.update({
        where : {id : id},
        data : pessoas
    })
}