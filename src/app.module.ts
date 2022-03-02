import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    // 환경 변수 전역에서 import 없이 사용 가능하도록 세팅
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
