import * as fromPeopleSelector from './people.selectors';

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
    },
    {
      name: 'Anna',
      type: 'Cat'
    }
  ]
},
];
describe('People selectors', () => {
  it('selectCatsByOwnerGender should return Cats by owner gender', () => {
    expect(fromPeopleSelector.selectCatsByOwnerGender.projector(people)).toEqual(
      [
        {gender: 'Male', data: ['Garfield']},
        {gender: 'Female', data: ['Anna', 'Simba']}
      ]
    );
  });

  it('selectCatsByOwnerGender should return null if no data is given', () => {
    expect(fromPeopleSelector.selectCatsByOwnerGender.projector(null)).toEqual(null);
  });
});
