import { connection } from '../connection'

export default async function signUpUser(
    name: string,
    email: string,
    password: string,
    role: string
    ) {
        await connection.insert({
            name
            
        })
    
}