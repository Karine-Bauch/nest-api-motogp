import { Module } from '@nestjs/common';
import { RidersController } from './controller/rider.controller';
import { RidersService } from './service/rider.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './entity/rider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rider])],
  controllers: [RidersController],
  providers: [RidersService],
  exports: [TypeOrmModule, RidersService],
})
export class RidersModule {}
