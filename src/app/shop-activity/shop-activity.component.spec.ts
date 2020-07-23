import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopActivityComponent } from './shop-activity.component';

describe('ShopActivityComponent', () => {
  let component: ShopActivityComponent;
  let fixture: ComponentFixture<ShopActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
