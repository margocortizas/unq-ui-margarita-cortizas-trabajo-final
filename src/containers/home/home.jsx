import { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home =() => {
    const navigate = useNavigate()
    
    return(
    <div>
        <button onClick = {() => navigate("/difficulties")}> Jugar </button>
    </div>
    )
}

export default Home;
