import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojePanstwoPaginationComponent } from './moje-panstwo-pagination.component';

describe('PaginationComponent', () => {
  let component: MojePanstwoPaginationComponent;
  let fixture: ComponentFixture<MojePanstwoPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojePanstwoPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojePanstwoPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
