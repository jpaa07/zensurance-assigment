import ApiAccess from "./models/api-auth";
import Auth from "./auth";
import { Authorization } from "./endpoints/authorization";
import { Space } from "./endpoints/space";
import { Team } from "./endpoints/team";
import { Folder } from "./endpoints/folder";
import { Task } from "./endpoints/task";

export class CiApi {
  private apiData: ApiAccess;

  private authorization?: Authorization;
  private team?: Team;
  private space?: Space;
  private folder?: Folder;
  private task?: Task;

  constructor(apiData: ApiAccess) {
      this.apiData = {
          url: apiData.url,
          token: Auth.getToken(apiData.token),
      }
  }

  public set token(newToken: string) {
    this.apiData.token = newToken
  }

  public get Authorization(): Authorization {
    return (this.authorization =
      this.authorization || new Authorization(this.apiData));
  }

  public get Team(): Team {
    return (this.team =
      this.team || new Team(this.apiData));
  }

  public get Space(): Space {
    return (this.space =
      this.space || new Space(this.apiData));
  }

  public get Folder(): Folder {
    return (this.folder =
      this.folder || new Folder(this.apiData));
  }

  public get Task(): Task {
    return (this.task =
      this.task || new Task(this.apiData));
  }
}
