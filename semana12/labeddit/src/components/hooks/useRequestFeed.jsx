import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestFeed = (initialData, endpoint) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers:{
                // Authorization: localStorage.getItem('token')
                Authorization:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1eTNuWk9qVFREbDlzbnJvR1ZGIiwidXNlcm5hbWUiOiJqb3JnZSIsImVtYWlsIjoiam9yZ2V0YWJ1bmFAYm9sLmNvbS5iciIsImlhdCI6MTYwMTQ5NzIyMn0.i1cWgzIFlMPv3Gsg14EiqPTbqC5HO5Bt-Rt9ynRrX4o`
            }
        })
            .then((response) => {
                setData(response.data.posts)
                console.log(response.data.posts)
            })
            .catch((error) => {
                console.log(error)
                alert('Ocorreu um erro, tente novamente')
            })
    }, [endpoint])

    return(data)
}

export default useRequestFeed