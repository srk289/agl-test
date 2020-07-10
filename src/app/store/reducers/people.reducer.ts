
import * as peopleActions from '../actions/people.actions';
import { IPeople } from '../../models/people.model';

export interface PeopleState {
  data: IPeople[] | null;
  loading: boolean;
  error?: string;
}

export const initialPeopleState: PeopleState = {
  loading: false,
  data: []
};

export function reducer(state: PeopleState = initialPeopleState, action: peopleActions.Actions): PeopleState {
  switch (action.type) {
    case peopleActions.LOAD_PEOPLE :
      return {
        ...state,
        loading: true
      };

    case peopleActions.LOAD_PEOPLE_SUCCESS :
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };

    case peopleActions.LOAD_PEOPLE_FAIL :
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}
