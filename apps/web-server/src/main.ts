import express from "express";
import { DataSource } from "typeorm";
import { createAppServices } from "./services";
import * as shared from "common";
import { createUserRoutes } from "./routes/user.routes";

function initDB() {
  return shared.AppDataSource.initialize()
    .then((dataSource): DataSource => {
      console.log("Data Source has been initialized");
      return dataSource;
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
      process.exit(1);
    });
}

async function bootstrap() {
  console.log(JSON.stringify(shared.config));
  const app = express();
  const dbConnection = await initDB();
  const services = createAppServices(dbConnection);

  const userRoutes = createUserRoutes(services.userService);

  app.use(userRoutes);

  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
    shared.AppDataSource.getRepository("User");
  });
}

bootstrap();
