import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeople } from '../models/people.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private api: ApiService) { }

  public getPeople(){
    return this.api.get('people.json');
  }
}
