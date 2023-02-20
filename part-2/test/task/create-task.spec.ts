import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { statusCode } from '../../src/enums/response';
import { Task } from '../../src/models/task';
import { TasksResponse } from '../../src/models/responses/get-tasks.response';

describe('Create task Tests', () => {
  let api: CiApi;
  let folderId: string;
  let listId: string;
  let fakeId: string;
  let fakeToken: string;
  let taskIds: string[] = [];

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    folderId = FileHelper.getTeamData().spaces[0].folders[0].id;
    listId = FileHelper.getTeamData().spaces[0].folders[0].lists[0].id;
    fakeId = '00000';
    fakeToken = 'fakeToken';
  });

  test('Should create Task', async () => {
    const newTaskData: Task = {
      name: `newTask${Date.now()}`,
    };
    const task = await api.Task.createTask(listId, newTaskData);
    taskIds.push((task.data as Task).id);
    expect(task.statusCode).toEqual(statusCode.Ok);
    expect(task.data.id !== undefined).toBeTruthy();
  });

  test('Should get created task from tasks list', async () => {
    const taskName = `newTask${Date.now()}`;
    const newTaskData: Task = {
      name: taskName,
    };
    let task = await api.Task.createTask(listId, newTaskData);
    taskIds.push((task.data as Task).id);
    expect(task.statusCode).toEqual(statusCode.Ok);

    const tasks = await api.Task.getTasks(listId);
    const tasksArray = (tasks.data as TasksResponse).tasks;
    expect(
      tasksArray.some((taskObject) => taskObject.name === task.data.name)
    ).toBeTruthy();
  });

  afterAll(async () => {
    for (const taskId of taskIds)
      if (taskId) {
        await api.Task.deleteTask(taskId);
      }
  }, 10000);
});
