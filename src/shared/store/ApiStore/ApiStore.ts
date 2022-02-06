import { ApiResponse, IApiStore, RequestParams } from "./types";
import qs from "qs";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    // TODO: Примите из параметров конструктора baseUrl
    // и присвойте его в this.baseUrl
    this.baseUrl = baseUrl;
  }

  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    // TODO: Напишите здесь код, который с помощью fetch будет делать запрос
    let url =
      params.method === "GET"
        ? this.baseUrl + params.endpoint + "?" + qs.stringify(params.data)
        : this.baseUrl + params.endpoint;

    let commonRequestParams = {
      headers: params.headers,
      method: params.method,
    };

    let postRequestParams = {
      ...commonRequestParams,
      body: JSON.stringify(params.data),
    };

    let requestParams =
      params.method === "GET" ? commonRequestParams : postRequestParams;

    // return new Promise(
    return fetch(url, requestParams).then(
      (res) => res.json(),
      (rej) => ({ success: false, data: rej, status: 404 })
    );
    // );
  }
}
