/*import React, { useRef, useState } from "react";
import './Quiz.css'
import { data } from "../../assets/data";


const Quiz = () => {

  let [index, setIndex] = useState(0);
  let [quetion, setQuestion]=useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];




  const checkAns = (e, ans) => {
    if(lock === false){
      if(quetion.ans===ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev+1);
      }else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[quetion.ans-1].current.classList.add("correct");
      }
    }

    
  }

  const next = ()=>{
    if(lock===true){
      if(index===data.length-1){
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    }
  }


  const reset =()=>{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);

  }

  return(
    <div className="container">
      <h1>Identify the Data Type</h1>
      <hr />

      {result?<></> : <>
        <h2>{index+1}. {quetion.question} </h2>
        <ul>
          <li ref={Option1} onClick={(e) => {checkAns(e, 1)}}>{quetion.option1}</li>
          <li ref={Option2} onClick={(e) => {checkAns(e, 2)}}>{quetion.option2}</li>
          <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{quetion.option3}</li>
          <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{quetion.option4}</li>
        </ul>
        <button onClick={next}>Next</button>

        

        <div className="index">{index+1} of {data.length} Quetions</div>
        
      </>}
      {result?<>
        <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button>
      </>:<></>}
      
      
    </div>
  )
}

export default Quiz
*/
/*import React, { useState } from "react";
import './Quiz.css';
import { data } from "../../assets/data";

const Quiz = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState(Array(data.length).fill(null));
  const [score, setScore] = useState(0);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (answers[questionIndex] !== null) return; // Prevent changing answer once selected

    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);

    if (data[questionIndex].ans === optionIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  return (
    <div className="container">
      <h1>Interactive Learning System</h1>
      <hr />
      <div className="questions-container">
        {data.map((item, index) => (
          <div key={index} className={`question-item ${selectedQuestion === index ? "selected" : ""}`}>
            <div
              className="question"
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}. {item.question}
            </div>
            {selectedQuestion === index && (
              <ul className="options">
                <li
                  className={answers[index] === 1 ? (item.ans === 1 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 1)}
                >
                  {item.option1}
                </li>
                <li
                  className={answers[index] === 2 ? (item.ans === 2 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 2)}
                >
                  {item.option2}
                </li>
                <li
                  className={answers[index] === 3 ? (item.ans === 3 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 3)}
                >
                  {item.option3}
                </li>
                <li
                  className={answers[index] === 4 ? (item.ans === 4 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 4)}
                >
                  {item.option4}
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;*/


import React, { useState } from "react";
import './Quiz.css';
import { data } from "./data";

const Quiz = () => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState(null);
  const [answers, setAnswers] = useState(Array(data.length).fill(null));
  const [score, setScore] = useState(0);

  const handleQuestionClick = (index) => {
    setExpandedQuestionIndex(index === expandedQuestionIndex ? null : index);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (answers[questionIndex] !== null) return; // Prevent changing answer once selected

    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);

    if (data[questionIndex].ans === optionIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  return (
    <div className="container1">
     
      <div className="questions-container">
        {data.map((item, index) => (
          <div key={index} className="question-item">
            <div
              className={`question ${expandedQuestionIndex === index ? "selected" : ""}`}
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}. {item.question}
            </div>
            {expandedQuestionIndex === index && (
              <ul className="options">
                <li
                  className={answers[index] === 1 ? (item.ans === 1 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 1)}
                >
                  {item.option1}
                </li>
                <li
                  className={answers[index] === 2 ? (item.ans === 2 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 2)}
                >
                  {item.option2}
                </li>
                <li
                  className={answers[index] === 3 ? (item.ans === 3 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 3)}
                >
                  {item.option3}
                </li>
                <li
                  className={answers[index] === 4 ? (item.ans === 4 ? "correct" : "wrong") : ""}
                  onClick={() => handleOptionClick(index, 4)}
                >
                  {item.option4}
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
