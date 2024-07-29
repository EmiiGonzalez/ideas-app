import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  public createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  public updatedAt: Date;
}
