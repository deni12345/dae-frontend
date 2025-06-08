import axios from "axios";

const HttpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default HttpClient;
