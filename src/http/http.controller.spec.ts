import { Test, TestingModule } from '@nestjs/testing';
import { HttpController } from './http.controller';
import { HttpDummyService } from './http.service';

describe('HttpController', () => {
  let controller: HttpController;
  let service: HttpDummyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpController],
      providers: [HttpDummyService],
    }).compile();

    controller = module.get<HttpController>(HttpController);
    service = module.get<HttpDummyService>(HttpDummyService);
  });

  describe('findAll', () => {
    it('should return an array of posts', async () => {
      const expectedResponse: any[] = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ];
      // jest.spyOn(service, 'findAll').mockResolvedValue(expectedResponse);

      const result = await controller.findAll();

      expect(result).toEqual(expectedResponse);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
