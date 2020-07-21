import { createStore } from "redux";

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"

// in Redux, only one function should modify data
// what 'modifier' returns becomes the state of the application
const countModifier = (count = 0, action) => {
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

number.innerText = 0

// 'store' is where you store 'state'
// 'state' means data that changes
const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
  console.log("There was a change on the store")
}

// 'subscribe' allows us to listen to changes in our 'store'
countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)

// with 'dispatch', we are sending message to 'modifier' in Redux
// countStore.dispatch({ type: "ADD" })
// countStore.dispatch({ type: "MINUS" })
// console.log(countStore.getState())