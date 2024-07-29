import { ROLES } from '../../constants/roles';
import { IdeaEntity } from '../../ideas/entities/idea.entity';
import { BaseEntity } from '../../shared/entities/base.entity';
import { IUser } from '../../shared/interfaces/user.interface';
import { Column, Entity, Unique, OneToMany } from 'typeorm';

@Entity('users')
@Unique(['email', 'nombre'])
export class UserEntity extends BaseEntity implements IUser {
  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;
  @Column({ type: 'varchar', length: 50, nullable: false })
  email: string;
  @Column({ type: 'varchar', nullable: false })
  password: string;
  @Column({ nullable: false, type: 'enum', enum: ROLES, default:  ROLES.USER })
  rol: ROLES;

  @OneToMany(() => IdeaEntity, (idea) => idea.user)
  ideas: IdeaEntity[];
}
