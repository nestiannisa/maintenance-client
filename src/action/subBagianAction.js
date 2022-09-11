import axios from "axios";
import { API_URL } from "../utils/constant";

export const SUB_BAGIAN = "SUB_BAGIAN";


export const showSubBagian = () => {
  return (dispatch) => {
    dispatch({
      type: SUB_BAGIAN,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/subBagian/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SUB_BAGIAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SUB_BAGIAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


