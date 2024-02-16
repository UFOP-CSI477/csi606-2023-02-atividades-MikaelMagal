import { evento_Router } from "./evento/evento_Router"

import cors from 'cors';
const host = 4444 

import express from "express";
export const api = express()


api.use(cors());
api.use(express.json())
api.use("/evento", evento_Router)


api.listen(host, ()=> {
    console.log("servidor iniciado")
})