import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_PROBLEM = "SHOW_PROBLEM";


export const showProblem = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_PROBLEM,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/problem/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_PROBLEM,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_PROBLEM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


