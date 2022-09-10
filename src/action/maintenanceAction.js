import axios from "axios";
import { API_URL } from "../utils/constant";

export const ADD_DATA = "ADD_DATA";
export const SHOW_DATA = "SHOW_DATA";
export const DETAIL_DATA = "DETAIL_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const addData = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_DATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: `${API_URL}/data/add`,
      timeout: 120000,
      data,
    })
      .then((response) => {
        console.log("data");
        dispatch({
          type: ADD_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("gagaaaal");
        dispatch({
          type: ADD_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateData = (id,data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_DATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: `${API_URL}/data/update/${id}`,
      timeout: 120000,
      data,
    })
      .then((response) => {
        console.log("data");
        dispatch({
          type: UPDATE_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("gagaaaal");
        dispatch({
          type: UPDATE_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const showData = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_DATA,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/data/show`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: SHOW_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailById = (id) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_DATA,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${API_URL}/data/${id}`, { timeout: 120000 })
      .then((response) => {
        dispatch({
          type: DETAIL_DATA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DETAIL_DATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


