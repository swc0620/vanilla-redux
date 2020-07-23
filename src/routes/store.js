// import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit"

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = createReducer([], {
    // you can mutate the state in 'Redux Toolkit'
    // In 'Redux Toolkit', you can either 'return' a new state or just mutate the state
    [addToDo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    },
    [deleteToDo]: (state, action) => {
        state.filter(toDo => toDo.id !== action.payload)
    }
})

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
      add: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
      },
      remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             // in "Redux Toolkit", any information you want to send will be sent with 'payload'
//             return [{ text: action.payload, id: Date.now() }, ...state]
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload)
//         default:
//             return state;
//     }
// }

// 'configureStore' both creates store and also provides middlewares
// const store = configureStore({ reducer })
// // const store = createStore(reducer)

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// };

export const { add, remove } = toDos.actions;

// export default store;
export default configureStore({ reducer: toDos.reducer });