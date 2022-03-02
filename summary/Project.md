# Server Rendering 세팅

### main.ts

```typescript
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Rendering Middleware 세팅
  app.useStaticAssets(join(__dirname, '..', 'public')); // 정적 HTML, CSS 파일
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // HTML => handlebars 파일
  app.setViewEngine('hbs');

  await app.listen(8000);
}
bootstrap();
```

### views/index.hbs

```hbs
<html>
  <head>
    <meta charset='utf-8' />
    <title>{{data.title}}</title>
    <link href='css/styles.css' rel='stylesheet' />
  </head>
  <body>
    <h3>{{message}}</h3>
    {{data.copyright}}
    <script src='js/scripts.js'></script>
  </body>
</html>
```

### app.controller.ts

```typescript
@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      message: 'Hello world!',
      data: {
        title: 'Chat App',
        copyright: 'Changi',
      },
    };
  }
}
```

- `@Render` 데코레이터를 통해 index.hbs 파일에 message 의 키 값으로 'Hello world!' value를 던져준다.
- `index.hbs` 에서 키 값인 `{{message}}` 를 통해 'Hello world!' value를 받아올 수 있다.
- `public` 폴더에 css,js 데이터를 main.ts 에서 디렉토리 설정을 해놓아서 모든 hbs 파일에서 불러올 수 있다.
