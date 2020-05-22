import {
  Controller,
  UseGuards,
  HttpStatus,
  Response,
  Request,
  Post,
  Body,
  Get,
  BadRequestException,
  HttpException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/users.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from './dto/login.dto';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('register')
  @UsePipes(new ValidationPipe())
  public async register(@Body() createUserDto: CreateUserDto) {
    const result = await this.authService.register(createUserDto);

    if (!result.success) {
      throw new HttpException(result, HttpStatus.BAD_REQUEST);
    }
    throw new HttpException(result, HttpStatus.OK);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Body() login: LoginUserDto) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('test')
  async test() {
    return 'test';
  }
}
