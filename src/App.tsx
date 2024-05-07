/** @jsxImportSource @emotion/react */
import { mainStyle } from "./App.styles";
import CardEnrollmentCompleteView from "./components/CardEnrollmentCompleteView/CardEnrollmentCompleteView";
import CardForm from "./components/CardForm/CardForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main css={mainStyle}>
      <Routes>
        <Route path="/" element={<CardForm />} />
        <Route
          path="/enrollmentCompleted"
          element={<CardEnrollmentCompleteView />}
        />
      </Routes>
    </main>
  );
}

export default App;
