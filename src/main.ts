import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '@src/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get('ConfigService') as ConfigService;
  const options = new DocumentBuilder()
    .setTitle(config.get<string>('docs.title'))
    .setDescription(config.get<string>('docs.description'))
    .setVersion(config.get<string>('docs.version'))
    .addTag(config.get<string>('docs.tag'))
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(config.get<string>('docs.apiUrl'), app, document);

  const port = config.get('app.port');
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}

bootstrap();
