import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { statusCode } from '../../src/enums/response';

describe('Team Tests', () => {
  let api: CiApi;
  let fakeToken: string;
  let expectedResponseTime = 3000;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    fakeToken = 'fakeToken';
  });

  test(`Should get Team Information in less than ${expectedResponseTime} ms`, async () => {
    const teamInformation = await api.Team.getTeams();
    expect(teamInformation.time).toBeLessThan(expectedResponseTime);
  });

  test('Should access Team information using a valid Token', async () => {
    const teamInformation = await api.Team.getTeams();
    expect(teamInformation.statusCode).toEqual(statusCode.Ok);
  });

  test('Should not access to Team Information with a wrong Token', async () => {
    api.token = fakeToken;
    const teamInformation = await api.Team.getTeams();
    expect(teamInformation.response.statusCode).toEqual(
      statusCode.Unauthorized
    );
  });
});
