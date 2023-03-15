import axios from "axios";

// creating instance of axios
const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  // headers: {
  //   Accept: "application/json",
  // },
});

// handle the request using http
http.interceptors.request.use(
  (request) => {
    request.headers.Accept = `application/json`;
    console.log("request send");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// handle the response using http
http.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response?.data;
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("Not Found");
    }
    return Promise.reject(error);
  }
);

export default http;
