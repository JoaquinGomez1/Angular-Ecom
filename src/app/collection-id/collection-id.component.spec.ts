import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionIdComponent } from './collection-id.component';

describe('CollectionIdComponent', () => {
  let component: CollectionIdComponent;
  let fixture: ComponentFixture<CollectionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
