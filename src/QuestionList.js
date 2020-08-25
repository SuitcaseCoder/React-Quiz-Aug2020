import React from 'react'
import QuestionCard from './QuestionCard'

// this destructures props, instead of passing in 'props' and then having to use props.flashcards
export default function QuestionList({questions}) {
    return (
        <div className="card-grid">
            {questions.map(question => {
                return <QuestionCard question={question} key={question.id }/>
            })}
        </div>
    )
}
