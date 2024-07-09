import { useEffect, useState } from 'react'
import './questions.css'
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../../service/Api'
import QuestionDisplay from '../../components/display/display'

const Questions = () => {
    const navigate = useNavigate()
    const params = useParams().difficulty
    const [questions, setQuestions] = useState([])
    const [current, setCurrentQuestion] = useState(null)
    const [correct, setCorrectAnswer] = useState(0)
    const [index, setNewIndex] = useState(0)

    const allAnswers = async () => {
        try {
            const response = await Api.getQuestions(params);
            setQuestions(response.data);
            setCurrentQuestion(response.data[0]);
        } catch (error) {
            console.log("Error loading questions");
        }
    };
    

    useEffect (() => {
        allAnswers()
    },[]);

    const handleAnswer = async (option) => {
        try {
            const response = await Api.checkAnswer(current.id, option);
            if (response.data.answer) {
                setCorrectAnswer(correct + 1);
            }
            const newIndex = index + 1;
            if (newIndex < questions.length) {
                setNewIndex(newIndex);
                setCurrentQuestion(questions[newIndex]);
            } else {
                setCurrentQuestion(null);
            }
        } catch (error) {
            console.log("Error checking answer");
        }
    };


    return (
        <div>
            
              {current ? 
              
                <QuestionDisplay difficultName ={params} question={current} handleAnswer={handleAnswer} counter = {correct}/>
              
                :( <>
                    <div className="home">
                        <div className="content">
                            <div className="score">
                                <h1>Your score is: {correct} !</h1>
                            </div>
                            <button onClick = {() => navigate("/difficulties")}> Try Again</button>
                        </div>
                    </div>
                 </>
                )}
            
        </div>
      );
    }

export default Questions;