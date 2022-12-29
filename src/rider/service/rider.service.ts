import { Injectable } from '@nestjs/common';
import { Rider } from '../entity/rider.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRiderDto } from '../dto';

@Injectable()
export class RidersService {
  constructor(
    @InjectRepository(Rider)
    private ridersRepository: Repository<Rider>,
  ) {}

  findRiders(): Promise<Rider[]> {
    return this.ridersRepository.find();
  }

  findRiderByNumber(number: string): Promise<Rider> {
    return this.ridersRepository.findOneBy({ number });
  }

  createRider(riderInfos: CreateRiderDto): any {
    return riderInfos;
  }

  deleteRider(id: number): any {
    return { msg: `This action deletes #${id} rider` };
  }

  // findOneById(id: number): Promise<Rider> {
  //   return this.ridersRepository.findOneBy({ id });
  // }
}
