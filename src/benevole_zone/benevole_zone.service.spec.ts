import { Test, TestingModule } from '@nestjs/testing';
import { BenevoleZoneService } from './benevole_zone.service';

describe('BenevoleZoneService', () => {
  let service: BenevoleZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenevoleZoneService],
    }).compile();

    service = module.get<BenevoleZoneService>(BenevoleZoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
