/** @jsxImportSource @emotion/react */
import { mainStyle } from "./App.styles";
import CardEnrollmentCompleteView from "./components/CardEnrollmentCompleteView/CardEnrollmentCompleteView";
import CardForm from "./components/CardForm/CardForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main css={mainStyle}>
        <Routes>
          <Route path="/" element={<CardForm />} />
          <Route
            path="/enrollmentCompleted"
            element={<CardEnrollmentCompleteView />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
