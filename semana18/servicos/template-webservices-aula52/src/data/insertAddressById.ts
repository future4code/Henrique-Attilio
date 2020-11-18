import { connection } from "..";
import { andress } from "../types/types";


export const insertAddressById = async (query: andress): Promise<any> => {
    try{
        const result = await connection.raw(`
        INSERT INTO 
        `)
    }
}
