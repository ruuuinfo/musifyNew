import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsTrackComponent } from './albums-track.component';

describe('AlbumsTrackComponent', () => {
  let component: AlbumsTrackComponent;
  let fixture: ComponentFixture<AlbumsTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
