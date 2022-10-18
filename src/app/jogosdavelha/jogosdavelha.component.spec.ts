import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosdavelhaComponent } from './jogosdavelha.component';

describe('JogosdavelhaComponent', () => {
  let component: JogosdavelhaComponent;
  let fixture: ComponentFixture<JogosdavelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosdavelhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosdavelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
