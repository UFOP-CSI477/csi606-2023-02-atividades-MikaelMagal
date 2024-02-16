import { Doacoes } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as DoacoesServices from "./doacoes_service";

export const doacoes_Router = express.Router();

doacoes_Router.post('/createDoacao', async(req: Request, res: Response) =>{
    const doacao : Doacoes = req.body
    try{
        const nova_doacao = await DoacoesServices.create_Doacao(doacao)
        return res.status(200).json(nova_doacao)
    }
    catch{
        return res.status(500).json("Erro ao criar doacao")
    }
})

doacoes_Router.patch('/updateDoacao/:id', async( req: Request, res: Response) =>{
    const doacao : Doacoes = req.body
    const id : number = parseInt(req.params.id)
    try{
        await DoacoesServices.update_City_Doacao(doacao, id)
        return res.status(200).json("Doacao atualizado")
    }
    catch{
        return res.status(500).json("Erro ao atualizar a doacao")
    }
})

doacoes_Router.delete('/deleteDoacao/:id', async( req: Request, res: Response) =>{
    const id : number = parseInt(req.params.id)
    try{
        await DoacoesServices.delete_Doacao(id)
        return res.status(200).json("Doacao apagada")
    }
    catch{
        return res.status(500).json("Erro ao deletar a doacao")
    }
})

doacoes_Router.get('/getDoacoes', async( req: Request, res: Response) =>{
    try{
        const result = await DoacoesServices.get_All_Doacao()
        return res.status(200).json(result)
    }
    catch{
        return res.status(500).json("Erro ao buscar as doacoes")
    }
})