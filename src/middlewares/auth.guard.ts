import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { jwt } from '../utils/utils.module';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException(
        'Unauthorized: No Authorization header found',
      );
    }

    const token = authHeader.split(' ')[1];

    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err: any, decoded: { userId: any; role: any }) => {
          if (err) {
            reject(new ForbiddenException('Forbidden: Invalid token'));
          } else {
            request.user = { userId: decoded.userId, role: decoded.role };
            resolve(true);
          }
        },
      );
    });
  }
}
