import {
  Controller,
  Get,
  Post,
  Put,
  // Patch,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';

import { Response } from 'express';

import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { RidersService } from './riders.service';
import { Rider } from './interfaces/rider.interface';

@Controller('riders')
export class RidersController {
  constructor(private ridersService: RidersService) {}

  @Get()
  async findAll(): Promise<Rider[]> {
    return this.ridersService.findAll();
  }

  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   return 'This returns all the riders';
  // }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Rider> {
    return this.ridersService.findOne(parseInt(id));
  }

  // @Post()
  // async create(@Body() createRiderDto: CreateRiderDto): Promise<string> {
  //   return 'This action adds a new rider';
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateRiderDto: UpdateRiderDto) {
  //   return `This action updates the informaitons about #${id} rider`;
  // }

  // @Delete()
  // delete(@Param('id') id: string) {
  //   return `This action deletes #${id} rider`;
  // }
}
