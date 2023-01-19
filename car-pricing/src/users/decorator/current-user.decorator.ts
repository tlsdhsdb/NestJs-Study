import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    //never로 타입을 설정한 이유 -> data 값을 사용하지 않을 것이기 때문에, data 값을 변경하는 즉시 어떤 방식으로든 사용되거나 액세스 되지않음
    //context => 들어오는 요청을 래핑한 것,실행 컨텍스트라고 하는 이유: web socket의 수신 메시지들을 추상화 하기 때문에 !
    const request = context.switchToHttp().getRequest();
    //애플리케이션에 들어오는 기본 요청을 담음
    return request.currentUser;
  },
);
