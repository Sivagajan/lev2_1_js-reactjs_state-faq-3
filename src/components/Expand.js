import { useSyncExternalStore } from "react"
import { useState } from "react"


const Expand = () => {
    const [expand, setExpand] = useState(false)

    const goBig = () => {
        setExpand(!expand)
    }
    return (
        <section>
            <article >
                <div className="questionDiv">
                    <p className="question">Why is React great ?</p>
                    <button onClick={goBig}>+</button>
                </div>

                <div className="answerDiv" style={!expand?{display:'none'}:null}>
                    <p>Fast Learning Curve</p>
                </div>
            </article>
        </section>
    )
}

export default Expand