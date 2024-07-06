import { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/logo.jpg'

const Home =() => {
    const navigate = useNavigate()
   
    return(
        <>
           <div className="home">
                <div>
                    <div>
                        <button  onClick = {() => navigate("/difficulties")}> Play! </button>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Home;
