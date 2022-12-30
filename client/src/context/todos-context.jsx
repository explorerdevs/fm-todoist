import * as React from "react";

const TodosContext = React.createContext(null);
const TodosDispatchContext = React.createContext(null);

const initialState = {
  todos: [],
  filter: "",
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

const useTodosState = () => {
  const context = React.useContext(TodosContext);
  if (context == undefined) {
    throw new Error("useTodosState must be used in a TodosProvider");
  }
  return context;
};

const useTodosDispatch = () => {
  const context = React.useContext(TodosDispatchContext);
  if (context == undefined) {
    throw new Error("useTodosDispatch must be used in a TodosProvider");
  }

  return context;
};

const ACTIONS = {
  INITIALIZE: "INITIALIZE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FILTER: "FILTER",
};

// only these 4 exports below are for app usage
export { useTodosState, useTodosDispatch, TodosProvider, ACTIONS };

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INITIALIZE:
      return {
        ...state,
        todos: action?.payload,
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ACTIONS.UPDATE:
      return {
        ...state,
        // todos: state.todos.filter(todo => )
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
