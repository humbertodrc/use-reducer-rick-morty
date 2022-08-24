import {useReducer} from "react";
import {Routes, Route} from "react-router-dom";
import {Header, Main, Login, Register, Footer} from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
	);
}

export default App;
