import ApiAccess from '../src/models/api-auth';
import * as fs from 'fs-extra';
import * as path from 'path';
import { TeamData } from '../data/models/team-data';

export default class FileHelper {

    private static readonly rootPath = path.join(__dirname, '../data/')

    public static getApiData(): ApiAccess {
        return fs.readJSONSync(
            path.join(this.rootPath, 'api-auth.json')
          ) as ApiAccess;
    }

    public static getTeamData(): TeamData {
        return fs.readJSONSync(
            path.join(this.rootPath, 'team.json')
          ) as TeamData;
    }
}