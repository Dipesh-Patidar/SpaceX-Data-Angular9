import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexDataComponent } from './spacex-data.component';

describe('SpacexDataComponent', () => {
  let component: SpacexDataComponent;
  let fixture: ComponentFixture<SpacexDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
