import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListComponent } from './cat-list.component';
import { By } from '@angular/platform-browser';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromSelectors from '../store/selectors/people.selectors';
import * as fromReducers from '../store/reducers/index';

describe('CatListComponent', () => {
  // let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;
  let mockStore: MockStore;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [CatListComponent],
    });
    fixture = TestBed.createComponent(CatListComponent);
    mockStore = TestBed.inject(MockStore);
  }));

  it('should display loading text', () => {
    mockStore.overrideSelector(fromSelectors.selectPeopleLoading, true);
    mockStore.overrideSelector(fromSelectors.selectCatsByOwnerGender, null);
    mockStore.overrideSelector(fromSelectors.selectPeopleLoadingFail, null);
    fixture.detectChanges();
    const loadingText = () =>  fixture.debugElement.queryAll(By.css('h3'))[0].nativeElement.textContent;
    expect(loadingText()).toBe('Loading...');
  });

  it('should display error text', () => {
    mockStore.overrideSelector(fromSelectors.selectPeopleLoading, false);
    mockStore.overrideSelector(fromSelectors.selectCatsByOwnerGender, null);
    mockStore.overrideSelector(fromSelectors.selectPeopleLoadingFail, 'Not Found');
    fixture.detectChanges();
    const loadingText = () =>  fixture.debugElement.queryAll(By.css('.error'))[0].nativeElement.textContent;
    expect(loadingText()).toContain('Not Found');
  });

  it('should list 2 cats', () => {
    mockStore.overrideSelector(fromSelectors.selectPeopleLoading, false);
    mockStore.overrideSelector(fromSelectors.selectCatsByOwnerGender,
      [{gender: 'male', data: ['b cat 1', 'a cat 2']}]);
    mockStore.overrideSelector(fromSelectors.selectPeopleLoadingFail, null);
    fixture.detectChanges();
    const listItems = () =>  fixture.debugElement.queryAll(By.css('li'));
    expect(listItems().length).toEqual(2);
  });

});

