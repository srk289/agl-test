import { AppState } from '../reducers';
import { PeopleState } from '../reducers/people.reducer';
import { createSelector } from '@ngrx/store';
import { IPeople } from '../../models/people.model';

export const selectPeople = (state: AppState) => state.people;
export const selectPeopleData = createSelector(selectPeople, (peopleState: PeopleState) => peopleState.data);
export const selectPeopleLoading = createSelector(selectPeople, (peopleState: PeopleState) => peopleState.loading);
export const selectPeopleLoadingFail = createSelector(selectPeople, (peopleState: PeopleState) => peopleState.error);
export const selectCatsByOwnerGender = createSelector(selectPeopleData, (people: IPeople[]) => {
  return people ? getCatsByOwnerGender(people) : null;
});

const getCatsByOwnerGender = (people: IPeople[]): {gender: string, data: string[]}[] => {
  return people.reduce((arr, person) => {
    const cats = person.pets ?
      person.pets.filter(pet => pet.type.toLowerCase() === 'cat')
        .map(pet => pet.name)
        .sort()
      : [];
    const gender = arr.find(item => item.gender === person.gender);
    if (gender) {
      gender.data = gender.data.concat(cats);
      gender.data.sort();
    } else {
      arr.push({gender: person.gender, data: cats});
    }
    return arr;
  }, []);
};
