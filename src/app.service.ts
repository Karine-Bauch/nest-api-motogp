import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Here is the HomePage of MotoGP API Nest';
  }
}
