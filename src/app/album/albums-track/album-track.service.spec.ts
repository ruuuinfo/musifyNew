import { TestBed } from '@angular/core/testing';

import { AlbumTrackService } from './album-track.service';

describe('AlbumTrackService', () => {
  let service: AlbumTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
