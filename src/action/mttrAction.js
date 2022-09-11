import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_HOUSING = "SHOW_HOUSING";
export const MTTR_HOUSING = "MTTR_HOUSING";


export const housing = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_HOUSING,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/mttr/housing`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_HOUSING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_HOUSING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const mttrHousing = () => {
  return (dispatch) => {
    dispatch({
      type: MTTR_HOUSING,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/mttr/mttrHousing`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: MTTR_HOUSING,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: MTTR_HOUSING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


