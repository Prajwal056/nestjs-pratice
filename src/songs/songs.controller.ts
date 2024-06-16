import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSongsDto } from './dto/songs.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  @Post()
  create(@Body() createUserDto: CreateSongsDto) {
    return createUserDto;
  }

  @Post('new')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createNew(@Body() createUserDto: CreateSongsDto) {
    return createUserDto;
  }
}
