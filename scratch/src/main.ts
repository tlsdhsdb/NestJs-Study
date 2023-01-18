//하나의 파일안에 모든 로직을 다 담을 예정
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
    //app instatnce
    //특정포트에서 들어오는 트래픽을 수신하게끔 지시하기
}

bootstrap();
//애플리케이션의 인스턴트를 생성한 다음 들어오는 트래픽을 수신하도록 지시하는 것
