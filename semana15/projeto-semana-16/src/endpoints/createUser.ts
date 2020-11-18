import { Request, Response} from "express";

export default async function createUser(
    req:Request,
    res:Response,
){
    try{
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
            res
                .status(400)
                .send('information not defined "name", "nickname", "email"')
        }

        const id: string = Date.now() + Math.random().toString()

            await insertUser(
                id,
                req.body.name,
                req.body.nickname,
                req.body.email

            )

        //consultar o banco de dados 

        //validar saidas do banco

        //responder a requisicao

    } catch (error) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }
    
}