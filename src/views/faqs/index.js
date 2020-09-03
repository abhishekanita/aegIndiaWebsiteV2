import React, { useState } from 'react'
import Header from './Header'
import Questions from '../../content/faqs/faqs.json'
import AnimateHeight from 'react-animate-height';


const FAQs = () => {
    console.log(Questions)
    return (
        <div>
            <Header />
            <div className = 'container space-2 space-bottom-lg-3'>
                <div className = 'row justify-content-lg-center'>
                    <div className = 'col-lg-8'>
                        {Questions.filter(item => item.title).map((item, index) => <Group key = {index} group = {item}/>)}
                    </div>
                </div>
            </div>
            <Group />
        </div>
    )
}

export default FAQs


const Group = ({group}) => {
    console.log(group)
    return (
          <div id="syncing" className="space-1">
            <h2>{group && group.title}</h2>
            <div id="syncingAccordion">
                {group && group.questions.filter(item => item.question).map((item, index) => <Question key = {index} question = {item}/>)}
                <Question />  
            </div>
          </div>
    )
}

const Question = ({question}) => {
    console.log(question)
    const [show, setShow] = useState(false);
    
    if(!question) return <></>
    return(
        <div>
            <div className="card shadow-none mb-3">
                <div className="card-header card-collapse" id="syncingHeadingOne">
                    <div className="btn btn-link btn-block d-flex justify-content-between card-btn collapsed bg-white px-0" onClick = {() => setShow(prev => !prev)}>
                        {question.question}

                        <span className="card-btn-toggle">
                            <span className="card-btn-toggle-default">{show ? '-' : '+'}</span>
                        </span>
                    </div>
                </div>
                <AnimateHeight height = {show ? 'auto' : 0} duration = {300}>
                    <div className="card-body px-0">
                        {question.answer}
                    </div>
                </AnimateHeight>
            </div>
        </div>
    )
}