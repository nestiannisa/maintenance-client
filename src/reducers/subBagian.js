import {
  SUB_BAGIAN
} from "../action/subBagianAction";

let initialState = {
  showSubBagianResult: false,
  showSubBagianLoading: false,
  showSubBagianError: false,

};

const subBagian = (state = initialState, action) => {
  switch (action.type) {
    case SUB_BAGIAN:
      return {
        ...state,
        showSubBagianResult: action.payload.data,
        showSubBagianLoading: action.payload.loading,
        showSubBagianError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default subBagian;
