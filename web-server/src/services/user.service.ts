import { Repository } from "typeorm";
import User from "@shared/db";

export interface UserService {
  getUsers: () => Promise<any>;
  getUserById: (id: string) => Promise<any>;
}
export function createUserService(userRepo: Repository<User>): UserService {
  async function getUsers() {
    return await userRepo.find();
  }

  async function getUserById(id: string) {
    return await userRepo.findOneBy({ id });
  }

  return { getUsers, getUserById };
}
