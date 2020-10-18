import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/globl-components/header/header'
import Api from '../../services/api'
import './Filme.css'

export default props => {
    const [filme, setFilme] = useState([])

    async function dataFilme(){
        const { id } = props.match.params;
        const filmeData = await Api.get(`${id}`)
        setFilme( filmeData.data)
    }

    useEffect(() => {
        dataFilme()
    }, [])

    return (
        <div>
            <Header />
            <div className= 'container-details'>
                <h1>{filme.nome}</h1>
                <p>{filme.sinopse}</p>
                <img src={filme.foto} alt='' />
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}