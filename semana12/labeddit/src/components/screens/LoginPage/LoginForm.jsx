import React from 'react'
import { TextField, Button } from '@material-ui/core'
import {Container} from './styled'




const Entrada = () => {
    return(
        <Container>
                
        <TextField
            name={'email'}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            />

        <TextField
            name={'senha'}
            label={'Senha'}
            variant={'outlined'}
            type={'text'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            />
        <Button 
            variant="contained" 
            color="primary">
            Entrar
        </Button>

        <Button 
            variant="outlined" 
            color="secundary">
            Cadastrar
        </Button>
  

  
          </Container>


    )
}

export default Entrada