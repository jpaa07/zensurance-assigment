import Endpoint from './endpoint';
import Request from '../request';
import ApiAccess from '../models/api-auth';
import ResponseData from '../models/responses/response';
import { TasksResponse } from '../models/responses/get-tasks.response';
import { Task as TaskModel } from '../models/task';

export class Task extends Endpoint {
  constructor(apiAccess: ApiAccess) {
    super(apiAccess);
  }

  public async getTasks(listId: string): Promise<ResponseData> {
    return Request.doRequest<TasksResponse>(
      `${this.apiAccess.url}/list/${listId}/task`,
      this.apiAccess.token,
      'GET'
    );
  }

  public async getTask(taskId: string): Promise<ResponseData> {
    return Request.doRequest<TaskModel>(
      `${this.apiAccess.url}/task/${taskId}`,
      this.apiAccess.token,
      'GET'
    );
  }

  public async createTask(
    listId: string,
    newTaskData: TaskModel
  ): Promise<ResponseData> {
    return Request.doRequest<TaskModel>(
      `${this.apiAccess.url}/list/${listId}/task`,
      this.apiAccess.token,
      'POST',
      { json: newTaskData }
    );
  }

  public async updateTask(
    taskId: string,
    taskData: TaskModel
  ): Promise<ResponseData> {
    return Request.doRequest<TaskModel>(
      `${this.apiAccess.url}/task/${taskId}`,
      this.apiAccess.token,
      'PUT',
      { json: taskData }
    );
  }

  public async deleteTask(taskId: string): Promise<ResponseData> {
    return Request.doRequest<TasksResponse>(
      `${this.apiAccess.url}/task/${taskId}`,
      this.apiAccess.token,
      'DELETE'
    );
  }
}
