import { useEffect, useState } from 'react'
import './display.css'
import { useNavigate } from 'react-router-dom'
import Api from '../../service/Api'

const DisplayQuestion =({difficultName, question, handleAnswer, counter}) => {
    const navigate = useNavigate()
    const [selectedButton, setSelectedButton] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleButtonClick  = async (option) => {
        setSelectedButton(option);
        const response = await Api.checkAnswer(question.id, option);
        if (response.data.answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        handleAnswer(option);
    };

    useEffect(() => {
        if (selectedButton !== null) {
            const timer = setTimeout(() => {
                setSelectedButton(null);
                setIsCorrect(null);
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [selectedButton]);

    const getButtonClass = (option) => {
        if (selectedButton == option) {
            return isCorrect ? "rtas correct" : "rtas incorrect";
        }
        return "rtas";
    };

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
                            <button className={getButtonClass("option1")} onClick={() => handleButtonClick ("option1")}> {question.option1}</button>
                            <button className={getButtonClass("option2")} onClick={() => handleButtonClick ("option2")}> {question.option2}</button>
                            <button className={getButtonClass("option3")} onClick={() => handleButtonClick ("option3")}> {question.option3}</button>
                            <button className={getButtonClass("option4")} onClick={() => handleButtonClick ("option4")}> {question.option4}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default DisplayQuestion;
