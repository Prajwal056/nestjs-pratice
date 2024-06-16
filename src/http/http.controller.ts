import { Controller, Get, Version } from '@nestjs/common';
import { HttpDummyService } from './http.service';
import {
  ApiTags,
  ApiResponse,
  ApiDefaultResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ErrorResponse, PostResponseType } from './http.dto';

@ApiTags('http')
@Controller({ path: 'http' })
export class HttpController {
  constructor(private readonly httpDummyService: HttpDummyService) {}

  @Version('1')
  @Get()
  @ApiOperation({
    summary: 'Retrieve all posts',
    description: 'Retrieves an array of all posts available.',
  })
  @ApiDefaultResponse({
    status: 200,
    description: 'Default response for http module.',
    type: [PostResponseType],
  })
  @ApiResponse({
    status: 200,
    description:
      'The request has succeeded and the response is an array of posts.',
    type: [PostResponseType],
  })
  @ApiResponse({
    status: 400,
    description:
      'Bad Request - The server could not understand the request due to invalid syntax.',
    type: ErrorResponse,
  })
  findAll() {
    return this.httpDummyService.findAll();
  }

  @Get()
  @Version('2') // Designate this method as part of version 2 of the API
  @ApiDefaultResponse({
    status: 200,
    description: 'Version 2 response for http module.',
    type: [PostResponseType], // Assume the response type is the same for simplicity
  })
  findAllV2() {
    // Implementation for version 2 of the findAll method
    // This could involve calling a different method on the service or handling the data differently
    return this.httpDummyService.findAllV2(); // Assuming this method exists in your service
  }
}
