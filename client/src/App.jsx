import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth,PrivacyPolicy } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/register" element={<Auth />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
