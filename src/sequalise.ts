import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'event_management',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
});

export default sequelize;