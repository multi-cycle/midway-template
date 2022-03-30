import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { PhotoMetadata } from './photoMetadata';
@EntityModel()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata: PhotoMetadata;
}
