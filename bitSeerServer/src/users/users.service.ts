import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  constructor(
    @InjectRepository(User) user,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
    super(user)
  }

  public async findByEmail(userEmail: string): Promise<any> {
    return await this.userRepository.findOne({ email: userEmail });
  }

  public async register(userDto: CreateUserDto): Promise<any> {
    const { email } = userDto;
    let user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      throw new HttpException(
        'User already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    user = this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }
}
