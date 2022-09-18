export const ACTIONS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        userLanguage: action.payload,
      };
    default:
      return state;
  }
};
