import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export function createUserController(userService: UserService) {
  async function getUser(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json();
  }
  async function getUserById(req: Request, res: Response) {
    const user = await userService.getUserById("123");
  }
  return { getUser, getUserById };
}
