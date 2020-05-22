import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';

@Module({
    controllers: [UsersController],
    providers: [UsersService, Repository],
    imports: [
      TypeOrmModule.forFeature([User]),
    ],
    exports: [UsersService]
  })
export class UsersModule {}
