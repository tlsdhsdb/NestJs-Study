//객체를 받아서 json으로 직렬화

import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';

interface ClassConstrucrtor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstrucrtor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  //implements를 하면 typescript 가 여기에 적절한 method 가 구현되었는지 확인한다.
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        //변환 프로세스
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
        //excludeExtraneousValues: true 특별하게 표시된 다른 속성만 공유하거나 노출되도록 하는 노출값
      }),
    );
  }
}
