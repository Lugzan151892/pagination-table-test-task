export interface ICharacter {
    id: number;
    name: string;
    status: string;
    created: string;
    episode: Array<string>;
    gender: string;
    image: string;
    location: ICharacterData;
    name: string;
    origin: ICharacterData;
    species: string;
    status: string;
    type: string;
    url: string;
}

interface ICharacterData {
    name: string; 
    url: string;
}

export as namespace COMMON;