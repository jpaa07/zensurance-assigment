import { describe, expect, test } from '@jest/globals';
import { CiApi } from '../../src/api';
import FileHelper from '../../utils/file-helper';
import { statusCode } from '../../src/enums/response';

describe('Authorization Tests', () => {
  let api: CiApi;
  let fakeToken: string;
  let expectedResponseTime = 3000;

  beforeAll(async () => {
    api = new CiApi(FileHelper.getApiData());
    fakeToken = 'fakeToken';
  });

  test(`Should get user Information in less than ${expectedResponseTime} ms`, async () => {
    const userInformation = await api.Authorization.getUser();
    expect(userInformation.time).toBeLessThan(expectedResponseTime);
  });

  test('Should access User information using a valid Token', async () => {
    const userInformation = await api.Authorization.getUser();
    expect(userInformation.statusCode).toEqual(statusCode.Ok);
  });

  test('Should not access to User Information with a wrong Token', async () => {
    api.token = fakeToken;
    const userInformation = await api.Authorization.getUser();
    expect(userInformation.response.statusCode).toEqual(
      statusCode.Unauthorized
    );
  });
});
