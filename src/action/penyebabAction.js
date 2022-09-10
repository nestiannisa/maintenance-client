import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_PENYEBAB = "SHOW_PENYEBAB";


export const showPenyebab = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_PENYEBAB,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/penyebab/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_PENYEBAB,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_PENYEBAB,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


