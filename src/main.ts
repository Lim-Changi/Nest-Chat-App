import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Rendering Middleware 세팅
  app.useStaticAssets(join(__dirname, '..', 'public')); // 정적 HTML, CSS 파일
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // HTML => handlebars 파일
  app.setViewEngine('hbs');

  await app.listen(8000);
}
bootstrap();
