import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebpageComponent } from './my-webpage.component';

describe('MyWebpageComponent', () => {
  let component: MyWebpageComponent;
  let fixture: ComponentFixture<MyWebpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWebpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
