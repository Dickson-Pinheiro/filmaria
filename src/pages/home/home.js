import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/globl-components/header/header'
import Api from '../../services/api'

import './home.css'

export default () => {
    const [filmes, setFilmes] = useState([])

        console.log(filmes)

        async function filmesData(){
            const filmesCollection = await Api.get('')
            setFilmes(filmesCollection.data)
        }
    useEffect(() => {
        filmesData()
    }, [])

    return(
        <div>
            <Header />
            <div className='container-filmes'>
                {filmes.map(filme => {
                    return(
                    <article key={filme.id}>
                        <h3>{filme.nome}</h3>
                        <img src={filme.foto} alt=''/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                    )
                })}
            </div>
        </div>
    )
}