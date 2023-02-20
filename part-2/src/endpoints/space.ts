import Endpoint from "./endpoint";
import Request from "../request";
import ApiAccess from "../models/api-auth";
import ResponseData from "../models/responses/response";
import SpacesResponse from "../models/responses/get-spaces.response";

export class Space extends Endpoint {
  constructor(apiAccess: ApiAccess) {
    super(apiAccess);
  }

  public async getSpaces(teamId: string): Promise<ResponseData> {
    return Request.doRequest<SpacesResponse>(
      `${this.apiAccess.url}/team/${teamId}/space`,
      this.apiAccess.token,
      "GET"
    );
  }

  public async getSpace(spaceId: string): Promise<ResponseData> {
    return Request.doRequest<Space>(
      `${this.apiAccess.url}/space/${spaceId}`,
      this.apiAccess.token,
      "GET"
    );
  }
}
