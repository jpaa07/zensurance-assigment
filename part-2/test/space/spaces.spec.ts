import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { matchers } from 'jest-json-schema';
import { statusCode } from '../../src/enums/response';
import { TeamError } from '../../src/enums/errors/team.errors';
expect.extend(matchers);

describe('Space Tests', () => {
  
  let api: CiApi;
  let teamId: string;
  let spaceId: string;
  let fakeId: string;
  let fakeToken: string;
  let expectedResponseTime = 3000;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    teamId = FileHelper.getTeamData().id;
    spaceId = FileHelper.getTeamData().spaces[0].id;
    fakeId = '11223344';
    fakeToken = 'fakeToken';
  });

  test(`Should get Space Information in less than ${expectedResponseTime} ms`, async () => {
    const spaceInformation = await api.Space.getSpace(spaceId);
    expect(spaceInformation.time).toBeLessThan(expectedResponseTime);
  });

  test(`Should get Spaces in less than ${expectedResponseTime} ms`, async () => {
    const folders = await api.Space.getSpaces(teamId);
    expect(folders.time).toBeLessThan(expectedResponseTime);
  });

  test('Should access Space information using a valid Token', async () => {
    const spaceInformation = await api.Space.getSpace(spaceId);
    expect(spaceInformation.statusCode).toEqual(statusCode.Ok);
  });

  test('Should access Spaces using a valid Token', async () => {
    const spaces = await api.Space.getSpaces(teamId);
    expect(spaces.statusCode).toEqual(statusCode.Ok);
  });

  test('Should get "Team Not Authorized" Error using a wrong teamId', async () => {
    const spaces = await api.Space.getSpaces(fakeId);
    expect(spaces.response.body).toContain(TeamError.TeamNotAuthorized);
    expect(spaces.response.statusCode).toEqual(statusCode.Unauthorized);
  });

  test('Should get "Team Not Authorized" Error using a wrong SpaceId', async () => {
    const spaces = await api.Space.getSpace(fakeId);
    expect(spaces.response.body).toContain(TeamError.TeamNotAuthorized);
    expect(spaces.response.statusCode).toEqual(statusCode.Unauthorized);
  });

  test('Should not access to Space Information with a wrong Token', async () => {
    api.token = fakeToken;
    const spaceInformation = await api.Space.getSpace(spaceId);
    expect(spaceInformation.response.statusCode).toEqual(
      statusCode.Unauthorized
    );
  });

  test('Should not access Spaces with a wrong Token', async () => {
    api.token = fakeToken;
    const spaces = await api.Space.getSpaces(teamId);
    expect(spaces.response.statusCode).toEqual(statusCode.Unauthorized);
  });
});
