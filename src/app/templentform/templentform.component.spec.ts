import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplentformComponent } from './templentform.component';

describe('TemplentformComponent', () => {
  let component: TemplentformComponent;
  let fixture: ComponentFixture<TemplentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
