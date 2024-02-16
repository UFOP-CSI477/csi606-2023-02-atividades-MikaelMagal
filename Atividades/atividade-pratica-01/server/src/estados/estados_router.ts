import { Estados } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as EstadosServices from "./estados_service";

export const estados_Router = express.Router();

estados_Router.post('/createEstado', async( req: Request, res: Response) => {
    const estado : Estados = req.body
    try {
        const nova_Cidade = await EstadosServices.create_Estado(estado)
        return res.status(200).json(nova_Cidade)
    }
    catch {
        return res.status(500).json("Erro ao criar um novo estado")
    }
})

estados_Router.patch('/updateEstado/:id', async( req: Request, res: Response) =>{
    const estado : Estados = req.body
    const id : number = parseInt(req.params.id)
    try{
        await EstadosServices.update_Estado(estado, id)
        return res.status(200).json("Estado atualizado com sucesso")
    }
    catch{
        return res.status(500).json("Erro ao atualizar o estado")
    }
})

estados_Router.delete('/deleteEstado/:id', async( req: Request, res: Response) =>{
    const id : number = parseInt(req.params.id)
    try{
        await EstadosServices.delete_Estado(id)
        return res.status(200).json("Estado deletar com sucesso")
    }
    catch{
        return res.status(500).json("Erro ao deleter o estado")
    }
})

estados_Router.get('/getEstados', async( req: Request, res: Response) =>{
    try{
        const result = await EstadosServices.get_All_Estado()
        return res.status(200).json(result)
    }
    catch{
        return res.status(500).json("Erro ao buscar todos os estados")
    }
})