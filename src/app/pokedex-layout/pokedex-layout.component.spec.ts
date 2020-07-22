import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexLayoutComponent } from './pokedex-layout.component';

describe('PokeComponent', () => {
  let component: PokedexLayoutComponent;
  let fixture: ComponentFixture<PokedexLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
