import { BaseEntity } from '../../shared/entities/base.entity';
import { IIdea } from '../../shared/interfaces/idea.interface';
import { TagEntity } from '../../tags/entities/tag.entity';
import { UserEntity } from '../../users/entities/users.entity';
import { Column, Entity, Unique, ManyToOne, ManyToMany } from 'typeorm';

/**
 * @class IdeaEntity
 * @classdesc Idea Entity
 * @version 0.0.1
 * @since 0.0.1
 * @author [Emiliano Gonzalez](https://github.com/EmiiGonzalez)
 * @description Entity for Ideas
 */
@Entity('ideas')
@Unique(['titulo'])
export class IdeaEntity extends BaseEntity implements IIdea {
  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  titulo: string;
  @Column({
    nullable: false,
    type: 'varchar',
  })
  descripcion: string;

  @ManyToOne(() => UserEntity, (user) => user.ideas, { eager : true })
  user: UserEntity;

  @ManyToMany(() => TagEntity, (tag) => tag.ideas, { eager : true })
  tags: TagEntity[];

  @Column({ default: false })
  isDeleted: boolean
}
