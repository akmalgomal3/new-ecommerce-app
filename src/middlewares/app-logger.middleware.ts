import { Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from '../user/app.service';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  constructor(private appService: AppService) {}
  async use(req: any, res: any, next: () => void) {
    res.on('finish', () => {
      this.appService.logRequest(req.method, req.originalUrl, res.statusCode);
    });
    next();
  }
}
