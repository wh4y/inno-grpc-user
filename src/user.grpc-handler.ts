import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Observable, of } from 'rxjs';
import {
  IsUserExistByLoginOrEmailRequest,
  IsUserExistByLoginOrEmailResponse,
  UserService as UserGrpcService,
} from '@libs/grpc';

@Controller()
export class UserGrpcHandler implements UserGrpcService {
  @GrpcMethod('UserService', 'isUserExistByLoginOrEmail')
  isUserExistByLoginOrEmail(
    data: IsUserExistByLoginOrEmailRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Observable<IsUserExistByLoginOrEmailResponse> {
    const result = Boolean(data.login || data.email);

    return of({ result });
  }
}
