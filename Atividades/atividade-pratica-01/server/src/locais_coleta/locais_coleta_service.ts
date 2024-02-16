import { locais_coleta } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_LC (locais_coleta : locais_coleta) : Promise <locais_coleta>{
    return await prisma.locais_coleta.create ({
        data : locais_coleta
    })
}

export async function delete_LC (id : number) : Promise <void>{
    await prisma.locais_coleta.delete ({
        where : {id : id}
    })
}

export async function get_All_LC (): Promise <locais_coleta[]>{
    return await prisma.locais_coleta.findMany()
    
}

export async function update_LC (locais_coleta : locais_coleta, id : number) : Promise <void>{
    await prisma.locais_coleta.update({
        where : {id : id},
        data : locais_coleta
    })
}