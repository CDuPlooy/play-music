import { TestBed, inject } from '@angular/core/testing';

import { PlaymusicService } from './playmusic.service';

describe('PlaymusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaymusicService]
    });
  });

  it('should be created', inject([PlaymusicService], (service: PlaymusicService) => {
    expect(service).toBeTruthy();
  }));
});
