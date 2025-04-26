import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardInfo from "./components/page/CardInfo";
import CardAddSuccess from "./components/page/CardAddSuccess";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CardInfo />} />
				<Route path="/addSuccess" element={<CardAddSuccess />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
