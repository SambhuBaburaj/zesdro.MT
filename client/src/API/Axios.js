import axios from "axios";
// const baseURL='http://ec2-3-95-19-71.compute-1.amazonaws.com:8000'
// const baseURL='http://ec2-13-232-47-251.ap-south-1.compute.amazonaws.com:8000'

const baseURL='http://localhost:8000'
const Instance=axios.create({baseURL})
Instance.interceptors.request.use(

    (config) => {

   
      const token = localStorage.getItem("UserAccessToken");
  
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
      console.log(error);
    }
  );
Instance.interceptors.response.use(
    (response) => {

      // Do something with the response data
      return response;
    },
    (error) => {
      // Handle the error
      return Promise.reject(error);
    }
  );

export default Instance