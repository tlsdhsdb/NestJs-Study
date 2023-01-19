import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return request.session.userId;
    //return 하는 값이 존재하면 true, 그렇지 않고 다른 값이 오면 false
  }
}
