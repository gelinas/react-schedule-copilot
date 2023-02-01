import axios, { AxiosInstance, AxiosResponse } from "axios";

declare module "axios" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  // if auth required, add token from localStorage to request
  public constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_EXPRESS_SERVER,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse);
  };

  // destructures data from axios response
  private _handleResponse = ({ data, headers }: AxiosResponse) => {
    return data;
  };
}

export default HttpClient;
