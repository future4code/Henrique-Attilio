import express, { Express } from "express"
import cors from "cors"
import dotenv from "dotenv"
import signUpUser from './controller/user/signUpUser'
import login from './controller/user/login'
import createPost from './controller/user/createPost'
import searchPostById from './controller/user/searchPostById'

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

app.post('/users/signup', signUpUser )

app.post('/users/login', login )

app.post('/posts/create', createPost )

app.get('/posts/:id', searchPostById )


app.listen(3003, () => {
   console.log("Server running on port 3003")
})