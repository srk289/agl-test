import * as fromPeople from './people.actions';

describe('People Actions', () => {
  it('should return appropriate actions', () => {
    expect(new fromPeople.LoadPeople().type).toBe('[People] Load Peoples');
    expect(new fromPeople.LoadPeopleSuccess({data: []}).type).toBe('[People] Load Peoples Success');
    expect(new fromPeople.LoadPeopleFail({error: ''}).type).toBe('[People] Load Peoples Failure');
  });
});
