import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //messageRepo: MessagesRepository;
  //public 으로 변경하면서 삭제

  constructor(public messagesRepo: MessagesRepository) {
    //this.messageRepo = messagesRepo;
    //public 으로 변경하면서 삭제
    //public으로 하면 클래스에 속성으로 자동할당된다.
  }

  findOne(id: string) {
    //이 부분 때문에 서비스와 리포지토리를 나누는것이 이상해보일 수도 있다.
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
