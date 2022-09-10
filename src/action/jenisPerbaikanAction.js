import axios from "axios";
import { API_URL } from "../utils/constant";

export const SHOW_JENIS_PERBAIKAN = "SHOW_JENIS_PERBAIKAN";


export const showJenisPerbaikan = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_JENIS_PERBAIKAN,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/jenisPerbaikan/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_JENIS_PERBAIKAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_JENIS_PERBAIKAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


