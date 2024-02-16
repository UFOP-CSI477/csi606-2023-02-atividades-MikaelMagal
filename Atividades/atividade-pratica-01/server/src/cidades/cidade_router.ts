import { Cidades } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as CidadesServices from "./cidade_service";

export const cidade_Router = express.Router();

cidade_Router.post('/createCity', async( req: Request, res: Response) => {
    const cidade : Cidades = req.body
    try {
        const nova_Cidade = await CidadesServices.create_City(cidade)
        return res.status(200).json(nova_Cidade)
    }
    catch {
        return res.status(500).json("Erro ao criar uma nova cidade")
    }
})

cidade_Router.patch('/updateCity/:id', async( req: Request, res: Response) =>{
    const cidade : Cidades = req.body
    const id : number = parseInt(req.params.id)
    try {
        await CidadesServices.update_City(cidade, id)
        return res.status(200).json("Cidade atualizada")
    } 
    catch {
        return res.status(500).json("Erro ao atualizar a cidade")
    }
})

cidade_Router.delete('/deleteCity/:id', async( req: Request, res: Response) =>{
    const id : number = parseInt(req.params.id)
    try {
        await CidadesServices.delete_City(id)
        return res.status(200).json("Cidade deletada")
    } 
    catch {
        return res.status(500).json("Erro ao deletar a cidade")
    }
})

cidade_Router.get('/getCities/:estado_id', async(req: Request, res: Response) =>{
    const id : number = parseInt(req.params.estado_id)
    try {
        const result = await CidadesServices.get_All_Cities(id)
        return res.status(200).json(result)
    }
    catch{
        return res.status(500).json("Erro ao buscar todas as cidades")
    }
})

cidade_Router.get('/getCidadebyName/:nome', async(req: Request, res: Response) =>{
    const nome : string = (req.params.nome)
    try {
        const result = await CidadesServices.get_All_Cities_by_Name(nome)
        return res.status(200).json(result)
    }
    catch{
        return res.status(500).json("Erro ao buscar as cidades")
    }
})
