import axios, { type AxiosInstance }  from "axios";


type httpClientConfigs={
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

class HttpClient{
   private instance : AxiosInstance;

   constructor(configs?:httpClientConfigs){
      this.instance = axios.create({
        baseURL: configs?.baseURL || "http://localhost:3000",
        timeout: configs?.timeout || 10000,
        headers: configs?.headers || {}
      });
   }
   
  getInstance():AxiosInstance{
    return this.instance;
  }
}

export const httpClient= new HttpClient().getInstance();