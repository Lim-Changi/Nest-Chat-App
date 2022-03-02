import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    // 환경 변수 전역에서 import 없이 사용 가능하도록 세팅
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
