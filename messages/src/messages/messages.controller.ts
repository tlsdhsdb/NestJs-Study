import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessagesDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') // class decorator
export class MessagesController {
  //messagesService: MessagesService;

  constructor(public messagesService: MessagesService) {
    //this.messagesService = new MessagesService();
    //실제 서비스를 만들때는 이런식으로 작성하면 안된다.
  }

  @Get() //method decorator
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: createMessagesDto /**argument decorator**/) {
    return this.messagesService.create(body.content);
  }
  //들어오는 데이터가 유효하지 않은지 확인하기 위해 pipe를 구현함
  // 유효성 검사 !

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
