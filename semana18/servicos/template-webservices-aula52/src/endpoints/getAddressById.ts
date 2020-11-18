import { Request, Response } from "express";
import { getAddressinfo } from "../services/getAddressinfo"
import { andress } from "../types/types";

export default async function getAddressById(
    req: Request,
    res: Response,
){
    try{
        if(
            !req.body.cep
        ){
            throw new Error("Endereco nao informado")
        }

        await getAddressById(req.body.cep)
        res.status(200).send()


        })

    
    }

}