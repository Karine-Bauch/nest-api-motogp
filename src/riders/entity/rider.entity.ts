import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'text', nullable: false })
  number: string;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column('timestamp with time zone')
  birth_date: Timestamp;

  @Column('text')
  country: string;

  @Column('int')
  height: number;

  @Column('int')
  weight: number;

  @Column('text')
  biography: string;
}
