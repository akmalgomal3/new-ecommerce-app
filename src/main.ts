import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLoggerMiddleware } from './middlewares/app-logger.middleware';
import { AppService } from './user/app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req: any, res: any, next: () => void) =>
    new AppLoggerMiddleware(new AppService()).use(req, res, next),
  );
  await app.listen(3000);
}
bootstrap();
