import {
  SHOW_LINE
} from "../action/lineAction";

let initialState = {
  showLineResult: false,
  showLineLoading: false,
  showLineError: false,

};

const line = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LINE:
      return {
        ...state,
        showLineResult: action.payload.data,
        showLineLoading: action.payload.loading,
        showLineError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default line;
