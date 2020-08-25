import React, { useState, useEffect, useRef } from "react";

export default function QuestionCard({ question }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial')

const frontEl = useRef()
const backEl = useRef()

function setMaxHeight(){
  const frontHeight = frontEl.current.getBoundingClientRect().height
  const backHeight = backEl.current.getBoundingClientRect().height
  setHeight(Math.max(frontHeight, backHeight, 100))
}

useEffect(
  setMaxHeight, [question.question, question.answer, question.options]
  )
useEffect(()=> {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div 
    className={`card ${flip ? 'flip' : ''}`}
    style={{height:height}} 
    onClick={() => setFlip(!flip)}
    >
        <div className='front' ref={frontEl}>
            {question.question}
            <div className="options" >
                {question.options.map(option => {
                    return <div className="option" key={option}>
                        {option}
                    </div>
                })}
            </div>
        </div>

        <div className="back" ref={backEl}>
            {question.answer}
        </div>
      {/* {flip ? question.answer : question.question} */}
    </div>
  );
}
