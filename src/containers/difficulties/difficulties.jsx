import { useEffect, useState } from 'react'
import './difficulties.css'
import '../home/home.css'
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
        <div>
        <div className="home dif">
            {<div className="content difficulties">
                {difficulties.map((difficulty) => (<ButtonDifficulties difficultName = {difficulty} />))}
            </div>}
        </div>

        </div>
        
        </>
    )
}

export default Difficulties;