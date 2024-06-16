import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class HttpDummyService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<Post[]> {
    return this.httpService
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response) => response.data));
  }
  findAllV2(): Observable<Post[]> {
    return this.httpService
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response) => response.data));
  }
}
