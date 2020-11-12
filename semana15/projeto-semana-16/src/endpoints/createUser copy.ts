import { Request, Response} from "express";

export default async function createUser(
    req:Request,
    res:Response,
){
    try{
        //validar entradas da requisicao

        //consultar o banco de dados 

        //validar saidas do banco

        //responder a requisicao

    } catch (error) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }
    
}