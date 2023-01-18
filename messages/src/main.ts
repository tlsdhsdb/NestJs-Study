import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  app.useGlobalPipes(new ValidationPipe()); // 유효성 검사 파이프 추가
  //원하는 경우에는 하나의 단일 루트 핸들러에만 파이프를 적용할 수 있다
  //그러나 이 경우 들어오는 모든 요청에 대해서 파이프를 처리할 예정이다
  //Data transfer Object를 작성해주면 파이프에서 처리함 (DTO)

  await app.listen(3000);
}
bootstrap();
