import { Test, TestingModule } from '@nestjs/testing';
import { AffectationCreneauService } from './affectation_creneau.service';

describe('AffectationCreneauService', () => {
  let service: AffectationCreneauService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffectationCreneauService],
    }).compile();

    service = module.get<AffectationCreneauService>(AffectationCreneauService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
