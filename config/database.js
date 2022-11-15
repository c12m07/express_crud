import { Sequelize } from "sequelize";

const db = new Sequelize("postgres", "postgres", "7539182465", {
  host: "localhost",
  dialect: 'postgres', 
  logging: false,
  port: 5432, 
  define: {
      timestamps: false 
  }
});

export default db;