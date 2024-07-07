import { useEffect, useState } from 'react'
import './display.css'
import { useNavigate } from 'react-router-dom'
import Api from '../../service/Api'

const DisplayQuestion =({difficultName, question, handleAnswer, counter}) => {
    const navigate = useNavigate()

    return(
        <>
            <div className= "home"> 
                <div className="content">
                    <div className = "juego">
                        <div className="text">
                            <h2> Difficulty: {difficultName} </h2>
                            <h2> Score: {counter}</h2>
                        </div>
                        <div className= "text question"> 
                            <h2>{question.question}</h2>
                        </div>
                        <div className = "buttonContainer">
                            <button className="rtas" onClick={() => handleAnswer("option1")}> {question.option1}</button>
                            <button className="rtas" onClick={() => handleAnswer("option2")}> {question.option2}</button>
                            <button className="rtas" onClick={() => handleAnswer("option3")}> {question.option3}</button>
                            <button className="rtas" onClick={() => handleAnswer("option4")}> {question.option4}</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default DisplayQuestion;
