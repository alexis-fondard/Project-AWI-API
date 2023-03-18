import { Test, TestingModule } from '@nestjs/testing';
import { AuthMobileService } from './auth.service';

describe('AuthService', () => {
  let service: AuthMobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthMobileService],
    }).compile();

    service = module.get<AuthMobileService>(AuthMobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
