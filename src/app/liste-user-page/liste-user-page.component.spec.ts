import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUserPageComponent } from './liste-user-page.component';

describe('ListeUserPageComponent', () => {
  let component: ListeUserPageComponent;
  let fixture: ComponentFixture<ListeUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
