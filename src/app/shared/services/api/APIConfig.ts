import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_BASE_PORT}`
  });
};