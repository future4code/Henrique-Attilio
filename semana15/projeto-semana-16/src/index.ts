import express from 'express';
import knex from 'knex';
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

export const connection2 = knex({-

    const app = express()
    app.use(express.json())

    app.put('/', createUser)

    app.listen(3003,()=>{
        console.log('Servidor rodando na porta 3003')
    })


