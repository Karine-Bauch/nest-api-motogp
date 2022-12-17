import { Controller, Get, Param } from '@nestjs/common';

import { RidersService } from '../service/riders.service';
import { Rider } from '../entity/rider.entity';

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

  @Get(':number')
  async findOne(@Param('number') number: string): Promise<Rider> {
    return this.ridersService.findOneByNumber(number);
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
