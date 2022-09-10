import {
  SHOW_BAGIAN
} from "../action/bagianAction";

let initialState = {
  showBagianResult: false,
  showBagianLoading: false,
  showBagianError: false,

};

const bagian = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BAGIAN:
      return {
        ...state,
        showBagianResult: action.payload.data,
        showBagianLoading: action.payload.loading,
        showBagianError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default bagian;
