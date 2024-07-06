import { useEffect, useState } from 'react'
import './display.css'
import { useNavigate } from 'react-router-dom'
import Api from '../../service/Api'

const DisplayQuestion =({difficultName, question, handleAnswer, counter}) => {
    const navigate = useNavigate()
    
    return(
        <>
        <div>
            <p> {difficultName} </p>
            <p> {counter}</p>
        </div>
        <div> 
            {question.question}
        </div>

        <button onClick={() => handleAnswer("option1")}> {question.option1}</button>
        <button onClick={() => handleAnswer("option2")}> {question.option2}</button>
        <button onClick={() => handleAnswer("option3")}> {question.option3}</button>
        <button onClick={() => handleAnswer("option4")}> {question.option4}</button>



        </>

    )
}
export default DisplayQuestion;
