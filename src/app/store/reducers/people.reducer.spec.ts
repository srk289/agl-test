import * as fromReducer from './people.reducer';
import * as fromActions from '../actions/people.actions';

describe('PeopleReducer', () => {
  describe('Load People action', () => {
    it('should return loading true', () => {
      const action = new fromActions.LoadPeople();
      const state = fromReducer.reducer(undefined, action);

      expect(state).toEqual({loading: true, data: []});
    });
  });
  describe('Load People Success action', () => {
    it('should return state with data', () => {
      const action = new fromActions.LoadPeopleSuccess({data: people});
      const state = fromReducer.reducer(undefined, action);

      expect(state).toEqual({loading: false, data: people});
    });
  });

  describe('Load People Fail action', () => {
    it('should return state with error message', () => {
      const action = new fromActions.LoadPeopleFail({error: 'Not Found'});
      const state = fromReducer.reducer(undefined, action);

      expect(state).toEqual({loading: false, data: null, error: 'Not Found'});
    });
  });
});


const people = [{
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
