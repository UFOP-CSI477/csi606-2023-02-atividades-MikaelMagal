import { Pessoas } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as PessoasServices from "./pessoa_service";


export const pessoas_Router = express.Router();

pessoas_Router.post('/createPessoa', async( req: Request, res: Response) =>{
    const pessoa : Pessoas = req.body
    try{
        const nova_Pessoa = await PessoasServices.create_Pessoa(pessoa)
        return res.status(200).json(nova_Pessoa)
    }
    catch{
        return res.status(500).json("Erro ao criar nova pessoa")
    }
})

pessoas_Router.patch('/updatePessoa/:id', async( req: Request, res: Response) =>{
    const pessoa : Pessoas = req.body
    const id : number = parseInt(req.params.id)
    try{
        await PessoasServices.update_Pessoa(pessoa, id)
        return res.status(200).json("Pessoa atualizada com sucesso")
    }
    catch{
        return res.status(500).json("Erro ao atualizar a pessoa")
    }
})

pessoas_Router.delete('/deletePessoa/:id', async( req: Request, res: Response) =>{
    const id: number = parseInt(req.params.id)
    try{
        await PessoasServices.delete_Pessoa(id)
        return res.status(200).json("Pessoa deletada com sucesso")
    }
    catch{
        return res.status(500).json("Erro ao deletar pessoa")
    }
})

pessoas_Router.get('/getPessoa', async( req: Request, res: Response)=>{
    try{
        const get_All_Pessoa = await PessoasServices.get_All_Pessoa()
        return res.status(200).json(get_All_Pessoa)
    }
    catch{
        return res.status(500).json("Erro ao buscar pessoas")
    }
})