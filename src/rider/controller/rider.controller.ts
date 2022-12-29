import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { RidersService as RiderService } from '../service/rider.service';
import { Rider } from '../entity/rider.entity';
import { CreateRiderDto } from '../dto';

@Controller('riders')
export class RidersController {
  constructor(private riderService: RiderService) {}

  @Get()
  async findAll(): Promise<Rider[]> {
    return this.riderService.findRiders();
  }

  @Get(':number')
  async findOne(@Param('number') number: string): Promise<Rider> {
    return this.riderService.findRiderByNumber(number);
  }

  @Post('post')
  async create(@Body() createRiderDto: CreateRiderDto) {
    console.log({
      createRiderDto,
    });
    return this.riderService.createRider(createRiderDto);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateRiderDto: UpdateRiderDto) {
  //   return `This action updates the informaitons about #${id} rider`;
  // }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.riderService.deleteRider(id);
  }
}
