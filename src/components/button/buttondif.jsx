import { useEffect, useState } from 'react'
import './buttondif.css'
import { useNavigate } from 'react-router-dom'
import Api from '../../service/Api'



const ButtonDifficulties =({difficultName}) => {
    const navigate = useNavigate()
    return(
        <button className ="buttondif" onClick={() => navigate(`/question/${difficultName}`)}>{difficultName}</button>
    )
}
export default ButtonDifficulties;

