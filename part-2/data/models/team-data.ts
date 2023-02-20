export interface TeamData {
    id: string;
    name: string;
    spaces: Space[]
}

export interface Space {
    id: string;
    name: string;
    folders: Folder[]
}

export interface Folder {
    id: string;
    name: string;
    lists: List[]
}

export interface List {
    id: string;
    name: string;
}