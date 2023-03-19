import { Test, TestingModule } from '@nestjs/testing';
import { FestivalZoneService } from './festival_zone.service';

describe('FestivalZoneService', () => {
  let service: FestivalZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FestivalZoneService],
    }).compile();

    service = module.get<FestivalZoneService>(FestivalZoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
