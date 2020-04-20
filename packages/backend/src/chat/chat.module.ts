import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { UserCommandsService } from '../chat-commands/user-commands/user-commands.service';
import RedisAdapter from '../util/redisAdapter';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatGateway, UserCommandsService, RedisAdapter],
  exports: [ChatService],
})
export class ChatModule {}
