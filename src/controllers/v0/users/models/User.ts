import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  
  @PrimaryKey
  @Column
  public email!: string;

  @Column
  public hash!: string;

}

