import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCountryItemComponent } from './page-country-item.component';

describe('PageCountryItemComponent', () => {
  let component: PageCountryItemComponent;
  let fixture: ComponentFixture<PageCountryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCountryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCountryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
