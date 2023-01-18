import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//사용자 저장소가 필요하다는 것을 종속성 주입 시스템에 알리는 것
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const user = this.repo.create({
      email,
      password,
    });

    return this.repo.save(user);
  }
  findOne(id: number) {
    /**if (!id) {
      return null;
    }**/
    return this.repo.findOneBy({ id });
    //해당하는 단 하나의 레코드
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
    //해당하는 모든 레코드
  }

  async update(id: number, attrs: Partial<User>) {
    //Partial로 넣고싶은 속성만 골라서 넣을 수 있다
    //동적으로 데이터를 넣을 수 있다!

    const user = await this.findOne(id);
    //service 메서드를 이용하여 유저데이터를 조회
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    console.log(user);
    console.log(attrs);
    //user데이터가 없을 경우를 예외처리함
    Object.assign(user, attrs);

    //이미 존재하는 오브젝트에 붙여넣기 함
    return this.repo.save(user);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    return this.repo.remove(user);
  }
}
