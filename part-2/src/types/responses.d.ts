import { Space } from "../models/space";
import SpacesResponse from "../models/responses/get-spaces.response";
import AuthorizedTeamsResponse from "../models/teams/responses/authorized-teams.response";
import { AuthorizedUserResponse } from "../models/responses/get-authorized-user.response";
import { TasksResponse } from "../models/responses/get-tasks.response";
import { FoldersResponse } from "../models/responses/get-folders.response";
import { Task } from "../models/task";
import { Folder } from "../models/folder";

export type ResponseObject =
  | AuthorizedUserResponse
  | AuthorizedTeamsResponse
  | SpacesResponse
  | TasksResponse
  | FoldersResponse
  | Space
  | Task
  | Folder
  | any
