import { Test, TestingModule } from '@nestjs/testing';
import { HttpDummyService } from './http.service';

describe('HttpService', () => {
  let service: HttpDummyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpDummyService],
    }).compile();

    service = module.get<HttpDummyService>(HttpDummyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
