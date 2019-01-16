import {Table, Column, Model, HasMany} from "sequelize-typescript";
import sequelize from '../../sequalise';

@Table({
    tableName: 'contacts'
})
export default class Contact extends Model<Contact> {

  @Column
  name: string;

  @Column
  contact_no: string;

}

sequelize.addModels([Contact]);
