import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { statusCode } from '../../src/enums/response';
import { Task } from '../../src/models/task';
import ResponseData from '../../src/models/responses/response';

describe('Delete tasks Tests', () => {
  let api: CiApi;
  let folderId: string;
  let listId: string;
  let fakeId: string;
  let taskId: string;
  let fakeToken: string;
  let task: ResponseData;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    folderId = FileHelper.getTeamData().spaces[0].folders[0].id;
    listId = FileHelper.getTeamData().spaces[0].folders[0].lists[0].id;
    fakeId = '00000';
    fakeToken = 'fakeToken';

    const newTaskData: Task = {
      name: `newTask${Date.now()}`,
    };
    task = await api.Task.createTask(listId, newTaskData);
    taskId = (task.data as Task).id;
  }, 10000);

  test('Should Delete Task', async () => {
    task = await api.Task.deleteTask(taskId);
    expect(task.statusCode).toEqual(statusCode.NoContent);
  });
});
