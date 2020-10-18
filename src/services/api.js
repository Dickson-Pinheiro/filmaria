import Axios from 'axios'

const api = Axios.create({
        baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes'    
})

export default api;
