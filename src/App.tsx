import { BrowserRouter, Route, Routes } from "react-router";
import CardInfo from "./components/page/CardInfo";
import CardCompletePage from "./components/page/CardAddSuccess";

function App() {
	return (
		<BrowserRouter basename="/react-payments/">
			<Routes>
				<Route path="/" element={<CardInfo />} />
				<Route path="/addSuccess" element={<CardCompletePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
