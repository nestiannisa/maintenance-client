import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_SECTION = "SHOW_SECTION";


export const showSection = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_SECTION,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/section/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_SECTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_SECTION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


