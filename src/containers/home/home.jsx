import { useState } from 'react'
import './home.css'
import '../../components/button/buttondif.css'
import { useNavigate } from 'react-router-dom'

const Home =() => {
    const navigate = useNavigate()
   
    return(
        <>
           <div className="home">
                <div className = "content">
                        <button  onClick = {() => navigate("/difficulties")}> Play! </button>
                </div>
            </div>
        </>
    )
}

export default Home;
