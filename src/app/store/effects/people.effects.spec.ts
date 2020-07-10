import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PeopleEffects } from './people.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../reducers';
import { PeopleService } from 'src/app/services/people.service';
import * as peopleActions from '../actions/people.actions';

describe('PeopleEffects', () => {
  let actions$: Observable<any>;
  let effects: PeopleEffects;
  let store: MockStore<AppState>;
  let peopleService: PeopleService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PeopleEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: PeopleService, useClass: MockPeopleService },
      ]
    });

    effects = TestBed.inject(PeopleEffects);
    store = TestBed.inject(MockStore);
    peopleService = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onLoadPeople$', () => {
    it('should fire getPeople', (done) => {
      const spy = spyOn(peopleService, 'getPeople').and.callThrough();
      actions$ = of(new peopleActions.LoadPeople());
      effects.onLoadPeople$.subscribe((res) => {
        expect(res).toEqual(new peopleActions.LoadPeopleSuccess({ data: mockPeople }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});

const initialState = {
  loading: false,
  data: []
};


const mockPeople = [{
  name: 'Bob',
  gender: 'Male',
  age: 23,
  pets: [
    {
      name: 'Garfield',
      type: 'Cat'
    },
    {
      name: 'Fido',
      type: 'Dog'
    }
  ]
},
{
  name: 'Molly',
  gender: 'Female',
  age: 21,
  pets: [
    {
      name: 'Simba',
      type: 'Cat'
    },
    {
      name: 'Dido',
      type: 'Dog'
    }
  ]
},
];

class MockPeopleService {
  getPeople() {
    return of(mockPeople);
  }
}
