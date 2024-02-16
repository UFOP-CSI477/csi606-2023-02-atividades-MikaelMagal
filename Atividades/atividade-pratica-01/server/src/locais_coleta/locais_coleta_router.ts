import { locais_coleta } from "@prisma/client";
import express from "express";
import type{Request, Response} from "express";
import * as LocaisColetaServices from "./locais_coleta_service";

export const locais_coleta_Router = express.Router();

locais_coleta_Router.post('/createLocaisColeta', async(req: Request, res: Response) =>{
    const locais_coleta : locais_coleta = req.body
    try{
        const novo_local_coleta = await LocaisColetaServices.create_LC(locais_coleta)
        return res.status(200).json(novo_local_coleta)
    }
    catch{
        return res.status(500).json("Erro ao criar novo local de coleta")
    }
})

locais_coleta_Router.patch('/updateLocaisColeta/:id', async( req: Request, res: Response) =>{
    const locais_coleta : locais_coleta = req.body
    const id : number = parseInt(req.params.id)
    try{
        await LocaisColetaServices.update_LC(locais_coleta, id)
        return res.status(200).json("Local de coleta atualizado com sucesso")
    }
    catch{
        return res.status(500).json("Erro ao atualizar o local de coleta")
    }
})

locais_coleta_Router.delete('/deleteLocaisColeta/:id', async(req: Request, res: Response) =>{
    const id: number = parseInt(req.params.id)
    try{
        await LocaisColetaServices.delete_LC(id)
        return res.status(200).json("Local de coleta deletado")
    }
    catch{
        return res.status(500).json("Erro ao deletar o local de coleta")
    }
})

locais_coleta_Router.get('/getLocaisColeta', async( req: Request, res: Response) =>{
    try{
        const result = await LocaisColetaServices.get_All_LC()
        return res.status(200).json(result)
    }
    catch{
        return res.status(500).json("Erro ao buscar locais de coleta")
    }
})