import Endpoint from "./endpoint";
import Request from "../request";
import ApiAccess from "../models/api-auth";
import ResponseData from "../models/responses/response";
import { FoldersResponse } from "../models/responses/get-folders.response";

export class Folder extends Endpoint {
  constructor(apiAccess: ApiAccess) {
    super(apiAccess);
  }

  public async getFolders(spaceId: string): Promise<ResponseData> {
    return Request.doRequest<FoldersResponse>(
      `${this.apiAccess.url}/space/${spaceId}/folder`,
      this.apiAccess.token,
      "GET"
    );
  }

  public async getFolder(folderId: string): Promise<ResponseData> {
    return Request.doRequest<Folder>(
      `${this.apiAccess.url}/folder/${folderId}`,
      this.apiAccess.token,
      "GET"
    );
  }
}