import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Destructure the variables from process.env
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
});

export default sequelize;
