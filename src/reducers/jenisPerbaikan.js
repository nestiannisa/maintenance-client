import {
  SHOW_JENIS_PERBAIKAN
} from "../action/jenisPerbaikanAction";

let initialState = {
  showJenisPerbaikanResult: false,
  showJenisPerbaikanLoading: false,
  showJenisPerbaikanError: false,

};

const jenisPerbaikan = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_JENIS_PERBAIKAN:
      return {
        ...state,
        showJenisPerbaikanResult: action.payload.data,
        showJenisPerbaikanLoading: action.payload.loading,
        showJenisPerbaikanError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default jenisPerbaikan;
