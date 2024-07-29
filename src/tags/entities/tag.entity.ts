import { IdeaEntity } from "../../ideas/entities/idea.entity";
import { BaseEntity } from "../../shared/entities/base.entity";
import { ITag } from "../../shared/interfaces/tag.interface";
import { Column, Entity, Unique, ManyToMany } from "typeorm";

@Entity({ name: 'tags' })
@Unique(['nombre'])
export class TagEntity extends BaseEntity implements ITag{
    @Column()
    nombre: string;
    @Column()
    color: string;

    @ManyToMany(type => IdeaEntity, idea => idea.tags)
    ideas: IdeaEntity[]
}