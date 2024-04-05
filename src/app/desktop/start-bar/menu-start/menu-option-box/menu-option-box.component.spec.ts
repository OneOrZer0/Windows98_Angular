import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOptionBoxComponent } from './menu-option-box.component';

describe('MenuOptionBoxComponent', () => {
  let component: MenuOptionBoxComponent;
  let fixture: ComponentFixture<MenuOptionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuOptionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuOptionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
