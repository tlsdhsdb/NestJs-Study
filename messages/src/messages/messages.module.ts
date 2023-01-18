import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController], // 자동 import
  providers: [MessagesService, MessagesRepository],
  //thinsThatCanBeUsedAsDependenciesForOtherClasses
})
export class MessagesModule {}
