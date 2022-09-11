import {
  SHOW_HOUSING,
  MTTR_HOUSING
} from "../action/mttrAction";

let initialState = {
  housingResult: false,
  housingLoading: false,
  housingError: false,

  mttrHousingResult: false,
  mttrHousingLoading: false,
  mttrHousingError: false,

};

const housing = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HOUSING:
      return {
        ...state,
        housingResult: action.payload.data,
        housingLoading: action.payload.loading,
        housingError: action.payload.errorMessage,
      };
   
    case MTTR_HOUSING:
      return {
        ...state,
        mttrHousingResult: action.payload.data,
        mttrHousingLoading: action.payload.loading,
        mttrHousingError: action.payload.errorMessage,
      };

      default:
        return state;
    }
};

export default housing;
