import { Test, TestingModule } from '@nestjs/testing';
import { JeuService } from './jeu.service';

describe('JeuService', () => {
  let service: JeuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JeuService],
    }).compile();

    service = module.get<JeuService>(JeuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
