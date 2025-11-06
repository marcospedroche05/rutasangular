import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamultiplicarRoutingComponent } from './tablamultiplicar.routing.component';

describe('TablamultiplicarRoutingComponent', () => {
  let component: TablamultiplicarRoutingComponent;
  let fixture: ComponentFixture<TablamultiplicarRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablamultiplicarRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablamultiplicarRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
