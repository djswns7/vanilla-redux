// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App";
// import { Provider } from "react-redux";
// import store from "./store";

// // ReactDOM.render(<App></App>, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </>
// );

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Define the state of our application
const initialState = {
  count: 0,
};

// Define the reducer function, which takes the current state and an action as input, and returns the new state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

// Create a component that renders the current count
const Counter = () => {
  const [count, setCount] = useState(store.getState().count);

  return (
    <div>
      The current count is: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
