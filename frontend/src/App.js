import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [dados, setDados] = useState([])
    useEffect(()=>{
        (async function get() {
            await axios.get('http://127.0.0.1:8000/api').then(res => {
                const dados = res.data
                console.log(dados)
                setDados(dados)
            })
        })()
    }, [])
    
    return (
        <>
            <div>
                {dados.map(lista => {
                    return (
                        <div key={lista.id}>
                            <h1>{lista.title}</h1>
                            <p>{lista.body}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default App