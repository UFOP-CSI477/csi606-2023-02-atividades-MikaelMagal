import { Tipos_sanguineos } from "@prisma/client";
import { prisma } from "../database/client";

export async function create_TS (tipo_Sanguineos : Tipos_sanguineos) : Promise <Tipos_sanguineos>{
    return await prisma.tipos_sanguineos.create ({
        data : tipo_Sanguineos
    })
}

export async function delete_TS (id : number) : Promise <void>{
    await prisma.tipos_sanguineos.delete ({
        where : {id : id}
    })
}

export async function get_TS(tipo: string, fator: string): Promise <Tipos_sanguineos[]>{
    return await prisma.tipos_sanguineos.findMany({
        where: {tipo: tipo, fator: fator}
    })
}

export async function get_All_TS(): Promise <Tipos_sanguineos[]>{
    return await prisma.tipos_sanguineos.findMany({
    })
}

export async function update_TS(tipos_sanguineos: Tipos_sanguineos, id : number) : Promise <void>{
    await prisma.tipos_sanguineos.update({
        where : {id : id},
        data : tipos_sanguineos
    })
}