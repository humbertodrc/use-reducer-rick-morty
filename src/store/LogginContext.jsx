import {createContext, useReducer, useState} from "react";
import {initialState, reducer} from "./reducer";

export const LogginContext = createContext();

const LogginProvider = ({ children }) => {
	const [clave, setClave] = useState("")
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleRegister = (data) => {
		dispatch({
			type: "REGISTER",
			payload: data,
		});

		setClave(data.passName)
	};

	const handleLogin = (data) => {
		
		if(data.pass === clave){
			dispatch({
				type: "LOGIN",
			});
		}
	};

	const handleLogout = () => {
		dispatch({
			type: "LOGOUT",
		});
	};

	return (
		<LogginContext.Provider
			value={{
				state,
				handleRegister,
				handleLogin,
				handleLogout,
			}}
		>
			{children}
		</LogginContext.Provider>
	);
};

export default LogginProvider;
