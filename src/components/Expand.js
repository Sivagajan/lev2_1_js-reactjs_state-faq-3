import FaqItem from './FAQItem'
import faq from './FAQ'

const Expand = () => {
    return (
        <>
            {faq.map((elt) =>
                <FaqItem
                    question={elt.question}
                    answer={elt.answer}
                    answerLong={elt.answerLong}
                />
            )
            }
        </>
    )

}
export default Expand