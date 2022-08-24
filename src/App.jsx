import {Routes, Route} from "react-router-dom";
import {Header, Main, Login, Register, Footer} from "./components";
import "./App.css";
import LogginProvider from "./store/LogginContext";

function App() {
	return (
		<div className="App">
			<LogginProvider>
				<Header />

				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>

				<Footer />
			</LogginProvider>
		</div>
	);
}

export default App;
