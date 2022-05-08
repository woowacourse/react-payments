import { useLocation } from "react-router-dom";
import "./App.css";
import CardAddPage from "./pages/CardAddPage/CardAddPage.component";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage.component";
import HomePage from "./pages/HomePage/HomePage.component";

function App() {
  const { state } = useLocation();

  const switchTabs = () => {
    if (!state) return <HomePage />;
    switch (state.data) {
      case "/add":
        return <CardAddPage />;
      case "/register":
        return <CardRegisterPage />;
      default:
        return <HomePage />;
    }
  };

  return <>{switchTabs()}</>;
}

export default App;
