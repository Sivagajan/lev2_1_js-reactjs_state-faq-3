import { useState } from 'react'

const FaqItem = (props) => {
    const [expand, setExpand] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const [button, setButton] = useState('+')
    const [button2, setButton2] = useState('+')

    const open = () => {
        setExpand(!expand)
        setExpand2(false)
        if (!expand) {
            setButton('-')
        } else {
            setButton('+')
        }
        setButton2('+')
    }

    const openFurther = () => {
        setExpand2(!expand2)
        
        if (!expand2) {
            setButton2('-')
        } else {
            setButton2('+')
        }
    }

    return (
        <section>
            <article className='question'>
                <p>{props.question}</p>
                <button onClick={open}>{button}</button>
            </article>
            <article className='answer' style={!expand ? { display: 'none' } : null}>
                <p>{props.answer}</p>
                <button onClick={openFurther}>{button2}</button>
            </article>
            <article className='longanswer' style={!expand2 ? { display: 'none' } : { display: 'block' }}>
                <p>{props.answerLong}</p>
            </article>
        </section>
    )

}

export default FaqItem