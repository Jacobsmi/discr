import { SignupArgs } from "../models/userModels";
import { UserRepository } from "../repositories/userRepository";

export default class UserService {
  private readonly userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createOneUser(newUserData: SignupArgs) {
    await this.userRepository.createOneUser(newUserData);
  }
}
