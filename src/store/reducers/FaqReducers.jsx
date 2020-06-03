const FaqReducers = (state, action) => {
	switch (action.type) {
		case "FAQ":
			return [...state, {}];
	}
};

export default FaqReducers;
