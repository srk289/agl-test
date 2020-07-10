import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as peopleReducer from './people.reducer';

export interface AppState {
  people: peopleReducer.PeopleState;
}

export const reducers: ActionReducerMap<AppState> = {
  people: peopleReducer.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
