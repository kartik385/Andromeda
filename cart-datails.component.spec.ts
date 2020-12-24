import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDatailsComponent } from './cart-datails.component';

describe('CartDatailsComponent', () => {
  let component: CartDatailsComponent;
  let fixture: ComponentFixture<CartDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
