import axiosInstance from "./axios";

export const getProducts = (data) => {
  return axiosInstance.get(BASE_URI, {
    body: data,
  });
};
