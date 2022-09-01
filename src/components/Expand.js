import { useSyncExternalStore } from "react"
import { useState } from "react"


const Expand = () => {
    const [expand, setExpand] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const button = document.getElementsByTagName('button')

    const goBig = () => {

        if(!expand){
            button[0].innerHTML = '-'
        }else{
            button[0].innerHTML = '+'
        }
        setExpand(!expand)
        setExpand2(false)
        button[1].innerHTML = '+'
    }

    const goBigger = () =>{
        setExpand2(!expand2)

        if(!expand2){
            button[1].innerHTML = '-'
        }else{
            button[1].innerHTML = '+'
        }
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
                    <button onClick={goBigger}> + </button>

                    <div style={!expand2?{display:'none'}:null}>
                        <p>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Expand