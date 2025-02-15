import { Injectable } from '@nestjs/common';

export type Role = 'ADMIN' | 'ENGINEER' | 'INTERN';

export interface UserPayload {
  id: number;
  name: string;
  email: string;
  role?: Role;
}

@Injectable()
export class UserService {
  usersData: UserPayload[] = [
    {
      id: 1,
      name: 'anis',
      email: 'abc@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'anis2',
      email: 'abc2@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'anis3',
      email: 'abc3@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'anis4',
      email: 'abc4@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'anis5',
      email: 'abc5@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: Role) {
    if (role) {
      return this.usersData.filter((user) => user.role === role);
    }
    return this.usersData;
  }

  findOne(id: number) {
    return this.usersData.find((user) => user.id === id);
  }

  createUser(userInfo: UserPayload) {
    const highestUserId = [...this.usersData].sort((a, b) => b.id - a.id);
    console.log(highestUserId[0]);
    this.usersData.push({ id: highestUserId[0].id + 1, ...userInfo });
    return this.usersData;
  }

  updateUser(id: number, userUpdateInfo: UserPayload) {
    this.usersData = this.usersData.map((user) => {
      return user.id === id ? { id, ...userUpdateInfo } : user;
    });
    return this.usersData;
  }

  deleteUser(id: number) {
    const foundUser = this.usersData.find((item) => item.id === id);
    if (foundUser) {
      this.usersData = this.usersData.filter((user) => user.id !== id);
      return foundUser;
    }
    return this.usersData;
  }
}
