import { Test, TestingModule } from '@nestjs/testing';
import { JourService } from './jour.service';

describe('JourService', () => {
  let service: JourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourService],
    }).compile();

    service = module.get<JourService>(JourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
