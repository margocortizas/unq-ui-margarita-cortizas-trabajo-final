import { useEffect, useState } from 'react'
import './difficulties.css'
import { useNavigate } from 'react-router-dom'
import Api from '../../service/Api'
import ButtonDifficulties from '../../components/button/buttondif'


const Difficulties =() => {
    const [difficulties, setDifficulties] = useState([])    
    const navigate = useNavigate()
    
    const allDifficulties = async () => {
        await Api.getDifficulties()
        .then((response) =>
            {setDifficulties(response.data)})
        .catch(
            console.log("falla en carga de dificultades")
        ).finally(console.log(difficulties))
    }
    
    useEffect (() => {
        allDifficulties()
    }
    ,[])

    return(
        <>
        {
        <div>
            {difficulties.map((difficulty) => (<ButtonDifficulties difficultName = {difficulty} />))}
        </div> 
        }
        </>
    )
}

export default Difficulties;