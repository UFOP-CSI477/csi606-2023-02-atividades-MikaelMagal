import { Estados } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_Estado (estados : Estados) : Promise <Estados>{
    return await prisma.estados.create ({
        data : estados
    })
}

export async function delete_Estado (id : number) : Promise <void>{
    await prisma.estados.delete ({
        where : {id : id}
    })
}

export async function get_All_Estado(): Promise <Estados[]>{
    return await prisma.estados.findMany()
    
}

export async function update_Estado(estados : Estados, id : number) : Promise <void>{
    await prisma.cidades.update({
        where : {id : id},
        data : estados
    })
}