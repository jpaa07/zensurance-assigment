import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { matchers } from 'jest-json-schema';
import { statusCode } from '../../src/enums/response';
import { TeamError } from '../../src/enums/errors/team.errors';
expect.extend(matchers);

describe('Folder Tests', () => {
  
  let api: CiApi;
  let spaceId: string;
  let folderId: string;
  let fakeId: string;
  let fakeToken: string;
  let expectedResponseTime = 3000;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    spaceId = FileHelper.getTeamData().spaces[0].id;
    folderId = FileHelper.getTeamData().spaces[0].folders[0].id;
    fakeId = '11223344';
    fakeToken = 'fakeToken';
  });

  test(`Should get Folder Information in less than ${expectedResponseTime} ms`, async () => {
    const folderInformation = await api.Folder.getFolder(folderId);
    expect(folderInformation.time).toBeLessThan(expectedResponseTime);
  });

  test(`Should get Folders in less than ${expectedResponseTime} ms`, async () => {
    const folders = await api.Folder.getFolders(spaceId);
    expect(folders.time).toBeLessThan(expectedResponseTime);
  });

  test('Should access Folder information using a valid Token', async () => {
    const folderInformation = await api.Folder.getFolder(folderId);
    expect(folderInformation.statusCode).toEqual(statusCode.Ok);
  });

  test('Should access Folders using a valid Token', async () => {
    const folders = await api.Folder.getFolders(spaceId);
    expect(folders.statusCode).toEqual(statusCode.Ok);
  });

  test('Should get "Team Not Authorized" Error using a wrong SpaceId', async () => {
    const folders = await api.Folder.getFolders(fakeId);
    expect(folders.response.body).toContain(TeamError.TeamNotAuthorized);
    expect(folders.response.statusCode).toEqual(statusCode.Unauthorized);
  });

  test('Should get "Team Not Authorized" Error using a wrong FolderId', async () => {
    const folder = await api.Folder.getFolder(fakeId);
    expect(folder.response.body).toContain(TeamError.TeamNotAuthorized);
    expect(folder.response.statusCode).toEqual(statusCode.Unauthorized);
  });

  test('Should not access to Folder Information with a wrong Token', async () => {
    api.token = fakeToken;
    const folderInformation = await api.Folder.getFolder(folderId);
    expect(folderInformation.response.statusCode).toEqual(
      statusCode.Unauthorized
    );
  });

  test('Should not access Folders with a wrong Token', async () => {
    api.token = fakeToken;
    const folders = await api.Folder.getFolders(spaceId);
    expect(folders.response.statusCode).toEqual(statusCode.Unauthorized);
  });
});
