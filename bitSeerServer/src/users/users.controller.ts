import { Crud } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: User,
  },
})
@ApiUseTags('users')
@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(public service: UsersService) { }
}
