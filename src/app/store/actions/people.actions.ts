import { Action } from '@ngrx/store';
import { IPeople } from '../../models/people.model';
export const LOAD_PEOPLE = '[People] Load Peoples';
export const LOAD_PEOPLE_FAIL = '[People] Load Peoples Failure';
export const LOAD_PEOPLE_SUCCESS =
  '[People] Load Peoples Success';

export class LoadPeople implements Action {
  readonly type = LOAD_PEOPLE;
}

export class LoadPeopleFail implements Action {
  readonly type = LOAD_PEOPLE_FAIL;
  constructor(public payload: {error: string}) {}
}

export class LoadPeopleSuccess implements Action {
  readonly type = LOAD_PEOPLE_SUCCESS;
  constructor(public payload: {data: IPeople[]}) {}
}


export type Actions =
 | LoadPeople
 | LoadPeopleSuccess
 | LoadPeopleFail;
