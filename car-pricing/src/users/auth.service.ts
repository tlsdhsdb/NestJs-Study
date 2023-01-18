import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    //같은 이메일을 이용하여 가입한 사용자가 있는지 확인한다
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    // 유저 비밀번호를 암호화여 저장한다
    // salt 생성
    const salt = randomBytes(8).toString('hex');

    // salt와 비밀번호를 해싱한다
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    // 해싱된 비밀번호와 salt를 결합한다.
    const result = salt + '.' + hash.toString('hex');

    //새로운 유저를 생성하고 저장한다
    const user = await this.usersService.create(email, result);

    //생성된 유저를 반환한다
    return user;
  }
  //로그인 로직
  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    const [salt, stored_hash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (stored_hash !== hash.toString('hex')) {
      throw new BadRequestException('bad password!');
    }
    return user;
  }
}
