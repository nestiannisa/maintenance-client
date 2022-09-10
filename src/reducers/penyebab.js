import {
  SHOW_PENYEBAB
} from "../action/penyebabAction";

let initialState = {
  showPenyebabResult: false,
  showPenyebabLoading: false,
  showPenyebabError: false,

};

const penyebab = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PENYEBAB:
      return {
        ...state,
        showPenyebabResult: action.payload.data,
        showPenyebabLoading: action.payload.loading,
        showPenyebabError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default penyebab;
