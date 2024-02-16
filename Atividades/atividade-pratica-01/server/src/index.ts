import { cidade_Router } from "./cidades/cidade_router"
import { estados_Router } from "./estados/estados_router"
import { pessoas_Router } from "./pessoas/pessoa_router"
import { Tipos_Sanguineos_Router } from "./tipos_sanguineos/tipos_sanguineos_router"
import { doacoes_Router } from "./doacoes/doacoes_router"

const cors = require('cors');
const host = 4444 

const express = require("express")
export const api = express()

api.use(cors());
api.use(express.json())
api.use("/cidade", cidade_Router)
api.use("/estado", estados_Router)
api.use("/pessoa", pessoas_Router)
api.use("/tipos_sanguineos", Tipos_Sanguineos_Router)
api.use("/doacao", doacoes_Router)

api.listen(host, ()=> {
    console.log("servidor iniciado")
})

