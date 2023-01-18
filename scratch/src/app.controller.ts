import { Controller, Get } from '@nestjs/common';

@Controller('/app') // 애플리케이션 내부에서 컨트롤러 역할을 할 클래스를 생성
export class AppController {
    //한 종류의 들어오는 요청을 처리함
    //내부에 또 다른 경로를 원할 때 마다 추가 방법을 추가 할 예정
    @Get('/hello_world')
    getRootRoute() {
        return 'hi there!';
    } //누가 요청을 할 때마다 해당 요청을 이 메서드로 라우팅 할 때 사용

    @Get('/bye')
    getByeThere() {
        return 'bye there';
    }
}
