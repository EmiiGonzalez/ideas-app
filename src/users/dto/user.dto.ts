import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ROLES } from 'src/constants/roles';
import { IUser } from 'src/shared/interfaces/user.interface';
import { UserEntity } from '../entities/users.entity';

export class UserDto implements IUser {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(ROLES)
  @IsNotEmpty()
  rol: ROLES;
}

export class UserUpdateDto implements IUser {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsEnum(ROLES)
  @IsNotEmpty()
  rol: ROLES;
}

export class UserResponseDto implements IUser {
    @Exclude()
    password: string;
    nombre: string;
    email: string;
    rol: ROLES;

    constructor(partial: UserEntity) {
      this.email = partial.email;
      this.rol = partial.rol;
      this.password = partial.password;
      this.nombre = partial.nombre;
    }
  }
  