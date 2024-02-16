import { Tipos_sanguineos } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as TipoSanguineoServices from "./tipos_sanguineos_service";

export const Tipos_Sanguineos_Router = express.Router();

Tipos_Sanguineos_Router.post('/createTS', async( req: Request, res: Response) =>{
    const tipo_sanguineo : Tipos_sanguineos = req.body
    try{
        const novo_tipo_sanguineo = await TipoSanguineoServices.create_TS(tipo_sanguineo)
        return res.status(200).json(novo_tipo_sanguineo)
    }
    catch{
        return res.status(500).json("Erro ao criar tipo sanguineo")
    }
})

Tipos_Sanguineos_Router.patch('/updateTS/:id', async( req: Request, res: Response) =>{
    const tipo_sanguineo : Tipos_sanguineos = req.body
    const id : number = parseInt(req.params.id)
    try{
        await TipoSanguineoServices.update_TS(tipo_sanguineo, id)
        return res.status(200).json("Tipo sanguineo atualizado")
    }
    catch{
        return res.status(500).json("Erro ao atualizar tipo sanguineo")
    }
})

Tipos_Sanguineos_Router.delete('/deleteTS/:id', async( req: Request, res: Response) =>{
    const id : number = parseInt(req.params.id)
    try{
        await TipoSanguineoServices.delete_TS(id)
        return res.status(200).json("Tipo sanguineo deletado")
    }
    catch{
        return res.status(500).json("Erro ao deletar o tipo sanguineo")
    }
})

Tipos_Sanguineos_Router.get("/getTS", async (req: Request, res: Response) => {
    try {
        const tipo = req.query.tipo as string | undefined;
        const fator = req.query.fator as string | undefined;
        
        if (tipo === undefined || fator === undefined) {
            return res.status(400).json("Os parâmetros tipo e fator são obrigatórios.");
          }

        const tipos_sanguineos = await TipoSanguineoServices.get_TS(tipo, fator)
        return res.status(200).json(tipos_sanguineos)
    }
    catch{
        return res.status(500).json("Erro ao buscar tipos sanguineos")
    }
})

Tipos_Sanguineos_Router.get("/getAllTS", async (req: Request, res: Response) =>{
    try{
        const tipo_Sanguineos = await TipoSanguineoServices.get_All_TS()
        return res.status(200).json(tipo_Sanguineos)
    }
    catch{
        return res.status(500).json("Erro ao buscar todos os tipos sanguineos")
    }
})