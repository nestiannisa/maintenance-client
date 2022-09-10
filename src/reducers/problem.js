import {
  SHOW_PROBLEM
} from "../action/problemAction";

let initialState = {
  showProblemResult: false,
  showProblemLoading: false,
  showProblemError: false,

};

const problem = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROBLEM:
      return {
        ...state,
        showProblemResult: action.payload.data,
        showProblemLoading: action.payload.loading,
        showProblemError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default problem;
