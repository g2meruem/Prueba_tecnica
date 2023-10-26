import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentComponent } from './modalcontent.component';

describe('ModalcontentComponent', () => {
  let component: ModalContentComponent;
  let fixture: ComponentFixture<ModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContentComponent]
    });
    fixture = TestBed.createComponent(ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
