import { Status } from './space';

export interface Folder {
    id: string;
    name: string;
    orderIndex: number;
    override_statuses: boolean;
    hidden: boolean;
    space: Space;
    task_count: string;
    archived: boolean;
    statuses: Status[];
    lists: object[];
    permission_level: string
}

export interface Space {
    id: string;
    name: string;
    access: boolean;
}