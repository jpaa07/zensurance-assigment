import Endpoint from "./endpoint";
import Request from "../request";
import ApiAccess from "../models/api-auth";
import ResponseData from "../models/responses/response";
import AuthorizedTeamsResponse from "../models/teams/responses/authorized-teams.response";

export class Team extends Endpoint {
  constructor(apiAccess: ApiAccess) {
    super(apiAccess);
  }

  public async getTeams(): Promise<ResponseData> {
    return Request.doRequest<AuthorizedTeamsResponse>(
        `${this.apiAccess.url}/team`,
        this.apiAccess.token,
        'GET'
      );
  }
}