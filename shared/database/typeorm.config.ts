import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import * as path from "path";
export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "entities", "*.entity.{ts,js}")],
  migrations: [__dirname + "/migrations/*.{ts,js}"],
});
