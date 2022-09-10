import {
  ADD_DATA,
  SHOW_DATA,
  DETAIL_DATA,
  UPDATE_DATA
} from "../action/maintenanceAction";

let initialState = {
  addDataResult: false,
  addDataLoading: false,
  addDataError: false,
  
  showDataResult: false,
  showDataLoading: false,
  showDataError: false,
  
  detailDataResult: false,
  detailDataLoading: false,
  detailDataError: false,
 
  updateDataResult: false,
  updateDataLoading: false,
  updateDataError: false,
 
};

const maintenance = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        addDataResult: action.payload.data,
        addDataLoading: action.payload.loading,
        addDataError: action.payload.errorMessage,
      };

      case SHOW_DATA:
        return {
          ...state,
          showDataResult: action.payload.data,
          showDataLoading: action.payload.loading,
          showDataError: action.payload.errorMessage,
        };
      
        case DETAIL_DATA:
        return {
          ...state,
          detailDataResult: action.payload.data,
          detailDataLoading: action.payload.loading,
          detailDataError: action.payload.errorMessage,
        };
        
        case UPDATE_DATA:
        return {
          ...state,
          updateDataResult: action.payload.data,
          updateDataLoading: action.payload.loading,
          updateDataError: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
};

export default maintenance;
