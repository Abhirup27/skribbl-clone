import express from "express";
import { createAppServices } from "./services";
import { AppDataSource } from "@shared/db";
import { createUserRoutes } from "./routes/user.routes";

function bootstrap() {
  const app = express();
  const services = createAppServices(AppDataSource);

  const userRoutes = createUserRoutes(services.userService);
  app.use(userRoutes);
  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
}

bootstrap();
