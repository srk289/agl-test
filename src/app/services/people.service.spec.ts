import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
describe('PeopleService', () => {
  let service: PeopleService;
  let apiService: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(PeopleService);
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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


  it('getPeople() should return data', () => {
    service.getPeople().subscribe((res) => {
      expect(res).toEqual(mockPeople);
    });

    const req = httpMock.expectOne('http://agl-developer-test.azurewebsites.net/people.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockPeople);
  });

});


