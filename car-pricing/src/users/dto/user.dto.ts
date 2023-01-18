import { Expose } from 'class-transformer';

//Expose 해당 속성을 공유하겠다는 말

export class UserDto {
  @Expose()
  id: number;
  @Expose()
  email: string;
}
