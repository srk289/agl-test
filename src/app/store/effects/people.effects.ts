import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PeopleService } from '../../services/people.service';
import * as peopleActions from '../actions/people.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { IPeople } from '../../models/people.model';
import { of } from 'rxjs';


@Injectable()
export class PeopleEffects {
  constructor(private actions$: Actions, private peopleService: PeopleService) {}
  @Effect()
  onLoadPeople$ = this.actions$
    .pipe(
      ofType<peopleActions.LoadPeople>(peopleActions.LOAD_PEOPLE),
      mergeMap((action) => this.peopleService.getPeople()
      .pipe(
        map((people: IPeople[])  => {
          return (new peopleActions.LoadPeopleSuccess({data: people}));
        }),
        catchError((err) => of(new peopleActions.LoadPeopleFail({error: err.statusText})))
      ))
  );
}
