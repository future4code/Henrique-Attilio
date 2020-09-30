import React from 'react'
import { TextField, Button } from '@material-ui/core'


const SignUpForm = () => {
    return(
        <div>
            <TextField
                //value={'name'}
                name={'name'}
                label={'Nome'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin={'normal'}
            />

            <TextField
                
                name={'email'}
                label={'E-mail'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin={'normal'}
            />

            <TextField
                //value={'name'}
                name={'password'}
                label={'Senha'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin={'normal'}
            />

            <Button
                color={'primary'}            
                variant={'contained'}
                type={'submit'}
                fullWidth
                margin={'normal'}
            >
                Fazer cadastro
            </Button>


            
        </div>
    )

}

export default SignUpForm