import { Injectable } from '@nestjs/common';
import { Rider } from '../entity/rider.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RidersService {
  constructor(
    @InjectRepository(Rider)
    private ridersRepository: Repository<Rider>,
  ) {}

  // create(rider: Rider) {
  //   this.riders.push(rider);
  // }

  findRiders(): Promise<Rider[]> {
    return this.ridersRepository.find();
  }

  findRiderByNumber(number: string): Promise<Rider> {
    return this.ridersRepository.findOneBy({ number });
  }

  // findOneById(id: number): Promise<Rider> {
  //   return this.ridersRepository.findOneBy({ id });
  // }
}
