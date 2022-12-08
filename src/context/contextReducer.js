const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;