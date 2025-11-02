import { DataSource } from "typeorm";
import { createUserService } from "./user.service";
import { UserService } from "./user.service";

export function createAppServices(dataSource: DataSource): {
  userService: UserService;
} {
  const userService = createUserService(dataSource);

  return {
    userService,
  };
}
