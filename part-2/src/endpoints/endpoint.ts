import ApiAccess from '../models/api-auth';

export default class Endpoint {
  protected apiAccess: ApiAccess;

  constructor(apiAccess: ApiAccess) {
    this.apiAccess = apiAccess;
  }
}
