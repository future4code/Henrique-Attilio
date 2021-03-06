import { Request, Response } from "express";
import { generateId } from '../../services/idGenerator'
import { connection } from '../../data/connection'
import { hash } from '../../services/hashManager'
import { generateToken } from '../../services/authenticator'

export default async function signUpUser (
    req: Request, 
    res: Response) {
        try {
           let message = "Success!"
           const { name, email, password } = req.body
     
           if (!name || !email || !password) {
              res.statusCode = 406
              message = '"name", "email" and "password" must beeee provided'
              throw new Error(message)
           }
     
           const id: string = generateId()
     
           const cypherPassword = await hash(password);
     
           await connection('labook_users')
              .insert({
                 id,
                 name,
                 email,
                 password: cypherPassword
              })
     
           const token: string = generateToken({ id })
     
           res.status(201).send({ message , token })
     
        } catch (error) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message || "ola jose"
     
           res.send({ message })
        }
     }
     
   