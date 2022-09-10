import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_LINE = "SHOW_LINE";


export const showLine = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_LINE,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/line/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_LINE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_LINE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


