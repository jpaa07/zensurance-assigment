import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { matchers } from 'jest-json-schema';
import { statusCode } from '../../src/enums/response';
import { TeamError } from '../../src/enums/errors/team.errors';
import { ListError } from '../../src/enums/errors/list.errors';
expect.extend(matchers);

describe('Get tasks Tests', () => {
  let api: CiApi;
  let folderId: string;
  let listId: string;
  let fakeId: string;
  let fakeToken: string;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    folderId = FileHelper.getTeamData().spaces[0].folders[0].id;
    listId = FileHelper.getTeamData().spaces[0].folders[0].lists[0].id;
    fakeId = '00000';
    fakeToken = 'fakeToken';
  });

  test('Should access Tasks using a valid Token', async () => {
    const tasks = await api.Task.getTasks(listId);
    expect(tasks.statusCode).toEqual(statusCode.Ok);
  });

  test('Should get "List not found" Error using a wrong ListId', async () => {
    const tasks = await api.Task.getTasks(fakeId);
    expect(tasks.response.body).toContain(ListError.ListNotFound);
    expect(tasks.response.statusCode).toEqual(statusCode.NotFound);
  });

  test('Should get "Team Not Authorized" Error using a wrong TaskId', async () => {
    const taskInformation = await api.Task.getTask(fakeId);
    expect(taskInformation.response.body).toContain(TeamError.TeamNotAuthorized);
    expect(taskInformation.response.statusCode).toEqual(statusCode.Unauthorized);
  });

  test('Should not access to Task Information with a wrong Token', async () => {
    api.token = fakeToken;
    const taskInformation = await api.Task.getTask(listId);
    expect(taskInformation.response.statusCode).toEqual(
      statusCode.Unauthorized
    );
  });

  test('Should not access Tasks with a wrong Token', async () => {
    api.token = fakeToken;
    const tasks = await api.Task.getTasks(folderId);
    expect(tasks.response.statusCode).toEqual(statusCode.Unauthorized);
  });
});
