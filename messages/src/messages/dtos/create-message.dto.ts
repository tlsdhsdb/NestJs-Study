import { IsString } from 'class-validator';
//유효성검사를 위한 라이브러리

export class createMessagesDto {
  @IsString()
  content: string;
}
