export interface IPet {
  name: string;
  type: string;
}

export interface IPeople {
  name: string;
  gender: string;
  age: number;
  pets: IPet[];
}
