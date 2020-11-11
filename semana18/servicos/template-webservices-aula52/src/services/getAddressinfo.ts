import axios from "axios";
import { andress }  from "../types/types"

const URL_ANDRESS = "https://viacep.com.br/ws"


export async function getAddressinfo (cep: number): Promise<andress> {

    const result = await axios.get(`${URL_ANDRESS}/${cep}/json`);

    return{
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.cidade,
        estado: result.data.estado,

    }

}