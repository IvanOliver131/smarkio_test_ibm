import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descricao: string;

}

export default Comment;
