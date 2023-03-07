import { Test, TestingModule } from '@nestjs/testing';
import { JeuZoneService } from './jeu_zone.service';

describe('JeuZoneService', () => {
  let service: JeuZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JeuZoneService],
    }).compile();

    service = module.get<JeuZoneService>(JeuZoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
