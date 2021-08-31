import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedMailsComponent } from './recieved-mails.component';

describe('RecievedMailsComponent', () => {
  let component: RecievedMailsComponent;
  let fixture: ComponentFixture<RecievedMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedMailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
