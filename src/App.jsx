import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "pages/New";

const cardListReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "CREATE": {
      newState = [...state, action.data];
      break;
    }
    default: {
      return newState;
    }
  }
  return newState;
};

export const CardStateContext = React.createContext();
export const CardDispatchContext = React.createContext();

function App() {
  const [cardListData, dispatch] = useReducer(cardListReducer, []);
  const dataId = useRef(4);

  const onCreate = (cardNumbers, dueDate, owner, cvc, password, company) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        cardNumbers,
        dueDate,
        owner,
        cvc,
        password,
        company,
      },
    });

    dataId.current += 1;
  };

  return (
    <CardStateContext.Provider value={cardListData}>
      <CardDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            {/* <Route path="/edit/:id" element={<Edit />} />  */}
          </Routes>
        </BrowserRouter>
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

export default App;
