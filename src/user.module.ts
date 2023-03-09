import { Module } from '@nestjs/common';
import { UserGrpcHandler } from './user.grpc-handler';

@Module({
  imports: [],
  controllers: [UserGrpcHandler],
})
export class UserModule {}
