import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto, UserResponseDto, UserUpdateDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(user: UserDto): Promise<UserDto> {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  public async getAllUsers(): Promise<UserDto[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getUserById(id: string): Promise<UserDto> {
    try {
      return await this.userRepository
        .createQueryBuilder('user')
        .where('user.id = :id', { id: id })
        .getOne();
    } catch (error) {
      throw error;
    }
  }


  public async updateUser(body: UserUpdateDto,id: number): Promise<UserUpdateDto> {
    try {
        const updatedUser = await this.userRepository.findOne({ where: { id } });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return new UserResponseDto(await this.userRepository.save(body)) ;
    } catch (error) {
        throw error;
    }
  }
}
