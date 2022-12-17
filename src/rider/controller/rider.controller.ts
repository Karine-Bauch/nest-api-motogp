import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { RidersService } from '../service/rider.service';
import { Rider } from '../entity/rider.entity';

@Controller('riders')
export class RidersController {
  constructor(private ridersService: RidersService) {}

  @Get()
  async findAll(): Promise<Rider[]> {
    return this.ridersService.findRiders();
  }

  @Get(':number')
  async findOne(@Param('number') number: string): Promise<Rider> {
    return this.ridersService.findRiderByNumber(number);
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
