import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'I am SIGNED UP' };
  }

  singin() {
    return { msg: 'I am SIGNED IN' };
  }
}
