import { evento } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as EventoServices from "./evento_Service";

export const evento_Router = express.Router();

evento_Router.post('/createEvento', async( req: Request, res: Response) =>{
    const evento : evento = req.body
    try{
        const novo_Evento = await EventoServices.create_Evento(evento)
        return res.status(200).json(novo_Evento)
    }
    catch{
        return res.status(500).json("Erro ao criar nova pessoa")
    }
})

evento_Router.post('/updateEvento/:id', async( req: Request, res: Response) =>{
    const evento : evento = req.body
    const id : number = parseInt(req.params.id)
    try{
        await EventoServices.update_Evento(evento, id)
        return res.status(200).json("Pessoa Atualizada")
    }
    catch{
        return res.status(500).json("Erro ao atualizar nova pessoa")
    }
})

evento_Router.delete('/deleteEvento/:id', async( req: Request, res: Response) =>{
    const id: number = parseInt(req.params.id)
    try{
        const evento = await EventoServices.delete_Evento(id)
        return res.status(200).json(evento)
    }
    catch{
        return res.status(500).json("Erro ao deletar o evento")
    }
})

evento_Router.get('/getAllEvento', async (req: Request, res: Response) =>{
    try{
        const evento = await EventoServices.get_All_Evento()
        return res.status(200).json(evento)
    }
    catch{
        return res.status(500).json("Erro ao buscar os eventos")
    }
})

evento_Router.get("/getEventobyName/:nome", async (req: Request, res: Response) =>{
    const nome = req.params.nome
    try{
        const eventos = await EventoServices.get_All_Eventos_by_Name(nome)
        return res.status(200).json(eventos)
    }
    catch{
        return res.status(500).json("Erro ao buscar evento pelo nome")
    }
})