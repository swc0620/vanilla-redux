import React, { useState } from "react"
import { connect } from "react-redux"
import { actionCreators } from "./store";
import ToDo from "../components/ToDo"

function Home({ toDos, dispatchAddToDo }) {
    const [text, setText] = useState("")

    function onChange(event) {
        setText(event.target.value)
    }

    function onSubmit(event) {
        event.preventDefault()
        console.log(text)
        setText("")
        dispatchAddToDo(text)
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={ onSubmit }>
                <input type="text" value={ text } onChange={ onChange }/>
            </form>
            <button>Add</button>
            <ul>
                { toDos.map(toDo => <ToDo {...toDo} key={ toDo.id } />) }
            </ul>
        </>
    )
}

// 'mapStateToProps' receives state from 'store' and provides it to 'Home'
// First argument is 'state' from Redux store. Second argument is 'props' of the component given by React router
// 'mapStateToProps' intercepts props before it reaches the component
function mapStateToProps(state, ownProps) {
    return { toDos: state }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
      dispatchAddToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

// 'connect' allows you to connect component with store.
// 'connect' has two arguments. 'state' and 'dispatch'
export default connect(mapStateToProps, mapDispatchToProps)(Home);