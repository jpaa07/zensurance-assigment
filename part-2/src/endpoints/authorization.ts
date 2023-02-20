import Endpoint from "./endpoint";
import Request from "../request";
import ApiAccess from "../models/api-auth";
import ResponseData from "../models/responses/response";
import { AuthorizedUserResponse } from "../models/responses/get-authorized-user.response";


export class Authorization extends Endpoint {
  constructor(apiAccess: ApiAccess) {
    super(apiAccess);
  }

  public async getUser(): Promise<ResponseData> {
    return Request.doRequest<AuthorizedUserResponse>(
        `${this.apiAccess.url}/user`,
        this.apiAccess.token,
        'GET'
      );
  }
}
