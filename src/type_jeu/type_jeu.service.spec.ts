import { Test, TestingModule } from '@nestjs/testing';
import { TypeJeuService } from './type_jeu.service';

describe('TypeJeuService', () => {
  let service: TypeJeuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeJeuService],
    }).compile();

    service = module.get<TypeJeuService>(TypeJeuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
