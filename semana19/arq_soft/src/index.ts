import express from 'express';
import dotenv from 'dotenv';

dotenv.config()


const app = express()
app.use(express.json())

app.put('/signup', signUpUser)

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003 thanks to jesus')
})