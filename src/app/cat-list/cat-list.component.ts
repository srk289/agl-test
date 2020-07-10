import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectCatsByOwnerGender,
  selectPeopleLoading,
  selectPeopleLoadingFail } from '../store/selectors/people.selectors';
import { LoadPeople } from '../store/actions/people.actions';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats$: Observable<any> = null;
  loading$: Observable<boolean>;
  loadError$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadPeople());
    this.loading$ = this.store.pipe(select(selectPeopleLoading));
    this.cats$ = this.store.pipe(select(selectCatsByOwnerGender));
    this.loadError$ = this.store.pipe(select(selectPeopleLoadingFail));
  }

}
