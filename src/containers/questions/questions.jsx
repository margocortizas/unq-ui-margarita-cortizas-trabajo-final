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
        await Api.getQuestions(params)
        .then((response) =>
            {setQuestions(response.data)
             setCurrentQuestion(response.data[0])})
        .catch(
            console.log("falla en carga de preguntas")
        ).finally(console.log(questions))
    }
    

    useEffect (() => {
        allAnswers()
    }
    ,[])

    const handleAnswer = async (option) => {
        await Api.checkAnswer(current.id, option)
        .then((response)=>
                {if (response.data.answer) setCorrectAnswer(correct + 1);
                setNewIndex(index+1);
                setCurrentQuestion(questions[index]);   
        })
    };


    return (
        <div>
            <>
              {current ? 
              
                <QuestionDisplay difficultName ={params} question={current} handleAnswer={handleAnswer} counter = {correct} />
              
                : <div>
                    <p>Your result is : {correct}</p>
                    <button onClick = {() => navigate("/difficulties")}> volver</button>
                 </div> 
              }
            </>
        </div>
      );
    }

export default Questions;