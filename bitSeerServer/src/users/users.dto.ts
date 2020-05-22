import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  readonly id: number;

  @ApiModelProperty()
  readonly firstName: string;

  @ApiModelProperty()
  readonly lastName: string;

  @IsEmail()
  @ApiModelProperty()
  readonly email: string;

  @IsNotEmpty()
  @ApiModelProperty()
  readonly password: string;
}
