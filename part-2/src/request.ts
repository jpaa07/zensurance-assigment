import got, { Options, RequestError } from 'got';
import ResponseData from "./models/responses/response";
import { ResponseObject } from './types/responses';
const merge = require('deepmerge');

export default class Request {

  public static async doRequest<T>(
    url: string,
    token: string,
    method: string,
    options?: Options
  ): Promise<ResponseData> {
    try {
      const response = got(
        url,
        merge(options, {
          method: method.toLowerCase(),
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        })
      );
      return {
        data: await response.json<T>() as ResponseObject,
        statusCode: (await response).statusCode,
        time: (await response).timings.phases.total
      } as ResponseData
    } catch (error) {
      return error as RequestError;
    }
  }
}
