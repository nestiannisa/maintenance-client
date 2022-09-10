import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_BAGIAN = "SHOW_BAGIAN";


export const showBagian = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_BAGIAN,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/bagian/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_BAGIAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_BAGIAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


