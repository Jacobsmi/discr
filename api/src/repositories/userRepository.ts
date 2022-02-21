import { PrismaClient } from "@prisma/client";
import { SignupArgs } from "../models/userModels";

export class UserRepository {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async createOneUser(newUserData: SignupArgs) {
    const result = await this.prisma.user.create({
      data: {
        ...newUserData,
      },
    });
    console.log(result);
  }
}
