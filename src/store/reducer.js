export const initialState = {
	name: "",
	lastName: "",
	isLoggedIn: false,
	isRegistered: false,
};

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "REGISTER": {
			return {
				...state,
				name: action.payload.name,
				lastName: action.payload.lastName,
				isLoggedIn: false,
				isRegistered: true,
			};
		}

		case "LOGIN": {
			return {
        ...state,
				isLoggedIn: true,
			};
    }
      
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
      
    default: {
      return state;
    }
	}
};
