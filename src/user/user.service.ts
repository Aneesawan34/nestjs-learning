import { Injectable } from '@nestjs/common';

type Role = 'ADMIN' | 'ENGINEER' | 'INTERN';

export interface UserPayload {
  id: number;
  name: string;
  email: string;
  role?: Role;
}

@Injectable()
export class UserService {
  findAll() {
    return 'Hello World';
  }

  findOne(id: number) {
    return id;
  }

  createUser(userInfo: UserPayload) {
    return userInfo;
  }

  updateUser(id: number, userUpdateInfo: UserPayload) {
    return userUpdateInfo;
  }

  deleteUser(id: number) {
    return id;
  }
}
