import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  firstName: string;

  @ApiModelProperty()
  @Column()
  lastName: string;

  @ApiModelProperty()
  @Column({ unique: true })
  email: string;

  @ApiModelProperty()
  @Column()
  password!: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    const isPasswordValid = await bcrypt.compare(attempt, this.password);
    return isPasswordValid;
  }

}
