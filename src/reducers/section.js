import {
  SHOW_SECTION
} from "../action/sectionAction";

let initialState = {
  showSectionResult: false,
  showSectionLoading: false,
  showSectionError: false,

};

const section = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SECTION:
      return {
        ...state,
        showSectionResult: action.payload.data,
        showSectionLoading: action.payload.loading,
        showSectionError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default section;
