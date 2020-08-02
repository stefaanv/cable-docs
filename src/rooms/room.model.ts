import { Column, Model, Table, DataType } from 'sequelize-typescript';

//By default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name.
// Column API docs at https://www.npmjs.com/package/sequelize-typescript#column-api and https://sequelize.org/master/manual/model-basics.html

@Table({ timestamps: true })
export class Room extends Model<Room> {
  @Column
  id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  name: string;
}
